This project is a simple To-Do List application developed using Node.js, Express.js, and MongoDB. The application allows users to create, read, update, and delete tasks. It is a RESTful API-driven application with the following key features:

Create a Task: Add a new task to the to-do list.
Retrieve Tasks: Fetch all tasks from the to-do list.
Update a Task: Modify the details of an existing task.
Delete a Task: Remove a task from the to-do list.

Technologies Used:
Node.js: JavaScript runtime environment.
Express.js: Web framework for building APIs.
MongoDB: NoSQL database to store the tasks.
Postman: For API testing.

Features:
API endpoints for managing tasks (POST, GET, PUT, DELETE).
Data is stored in MongoDB.
API returns proper HTTP status codes (e.g., 200 OK, 201 Created, 404 Not Found).

API Endpoints:
1.Create a New Task (POST) :
URL: http://localhost:5000/task
2.Get All Tasks (GET) :
URL: http://localhost:5000/tasks
3.Update a Task (PUT) :
URL: http://localhost:5000/task/:id
4.Delete a Task (DELETE) :
URL: http://localhost:5000/task/:id

To clone this repository and get the project up and running, follow the steps below:
git clone https://github.com/sawalikhanke290/ng-training-assignment-1-backend.git
cd ng-training-assignment-1-backend
//Run the following command to install all dependencies:
npm install

 The default connection URL will look something like this: mongodb://localhost:27017/TaskDatabse.

You can update the mongoose.connect() string in the server.js file if you are using a different database URL.

To start the server, run the following command:
npm start
If the server starts successfully, you should see the following message in your terminal:
Server running on port 5000
MongoDB connected successfully
The application will now be running locally on http://localhost:5000.

