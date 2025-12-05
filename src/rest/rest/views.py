from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']

class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        todos = []
        for todo in db.todos.find():
            todo['_id'] = str(todo['_id'])
            todos.append(todo)
        return Response(todos, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        data = request.data
        description = data.get('description')
        
        if not description:
            return Response({'error': 'Description is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not isinstance(description, str) or len(description.strip()) == 0:
             return Response({'error': 'Description cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)

        todo = {'description': description.strip()}
        result = db.todos.insert_one(todo)
        return Response({'id': str(result.inserted_id)}, status=status.HTTP_201_CREATED)

