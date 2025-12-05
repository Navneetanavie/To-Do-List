# Implementation Details

Here is how the project requirements were implemented step-by-step:

## 1. Form Submission (POST)
**Requirement:** On form submission, the app should interact with the Django backend (`POST http://localhost:8000/todos`) and create a TODO in MongoDB.

**Implementation:**
- I implemented the `handleAddTodo` function in `App.js`.
- This function uses the `fetch` API to send a `POST` request to `http://localhost:8000/todos/`.
- The todo description is sent in the request body as JSON.
- This function is passed as a prop (`onAddTodo`) to the `TodoForm` component.

## 2. Fetching Todos (GET)
**Requirement:** A list with hardcoded TODOs should be changed to reflect TODOs in the backend (`GET http://localhost:8000/todos`).

**Implementation:**
- I implemented the `fetchTodos` function in `App.js` to retrieve data from the backend.
- It sends a `GET` request to `http://localhost:8000/todos/`.
- I used the `useState` hook to create a `todos` state variable for storing the list.
- I used the `useEffect` hook to call `fetchTodos` once when the component mounts, ensuring the list is populated on load.
- The `todos` state is passed as a prop to the `TodoList` component for rendering.

## 3. Refreshing the List
**Requirement:** When the form is submitted, the TODO list should refresh again and fetch latest list of TODOs from MongoDB.

**Implementation:**
- Inside the `handleAddTodo` function, I added a call to `fetchTodos()` immediately after the `POST` request completes successfully.
- This triggers a re-fetch of the data, updating the `todos` state and causing the UI to re-render with the newly added item.

---

## Other Improvements

### Docker Fix
- The Docker container was using `yarn` while the host used `npm`, causing conflicts.
- I updated `docker-compose.yml` to use `npm install && npm start` and rebuilt the containers.

### Styling
- I updated the main container in `App.js` to look like a rectangular note with a pink background (`#ff8da1`), padding, and shadow.

### Git Configuration
- Updated the remote repository URL to `git@github.com:Navneetanavie/To-Do-List.git`.

## How to Run

1.  **Start Docker Containers:**
    ```bash
    docker-compose up -d --build
    ```
2.  **Access the App:**
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:8000](http://localhost:8000)
