CRUD TODO API
Welcome to the CRUD TODO API! This API allows you to create, read, update, and delete TODO items. It is built using Node.js and MongoDB. This document will guide you through setting up the project, running it, and understanding the available endpoints.

Table of Contents
Features
Prerequisites
Installation
Configuration
Running the API
API Endpoints
Error Handling
License
Features
Create a new TODO item
Retrieve a list of all TODO items
Retrieve a single TODO item by ID
Update an existing TODO item by ID
Delete a TODO item by ID
Prerequisites
Node.js (v14 or later)
MongoDB (local installation or MongoDB Atlas account)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Harispatel/todoReactNodejs.git
cd crud-todo-api
Install dependencies:

bash
Copy code
npm install
Configuration
Create a .env file in the root directory of the project.

Add the following environment variables to the .env file:

env
Copy code
PORT=3000
MONGO_URI=mongodb:http://localhost:9000/todos/
Adjust the MONGO_URI if you are using a remote MongoDB instance.

Running the API
Start the server:

bash
Copy code
npm start
The API will be running at http://localhost:9000.

API Endpoints
Create a TODO Item
Endpoint: POST /todos
Description: Create a new TODO item.
Request Body:
json
Copy code
{
  "title": "Sample TODO",
  "description": "This is a sample TODO item",
  "completed": false
}
Response:
json
Copy code
{
  "_id": "60c72b2f9b1e8a3f244b4d31",
  "title": "Sample TODO",
  "description": "This is a sample TODO item",
  "completed": false,
  "createdAt": "2023-05-18T12:00:00.000Z"
}
Get All TODO Items
Endpoint: GET /todos
Description: Retrieve a list of all TODO items.
Response:
json
Copy code
[
  {
    "_id": "60c72b2f9b1e8a3f244b4d31",
    "title": "Sample TODO",
    "description": "This is a sample TODO item",
    "completed": false,
    "createdAt": "2023-05-18T12:00:00.000Z",
    "updatedAt": "2023-05-18T12:00:00.000Z"
  }
]
Get a Single TODO Item
Endpoint: GET /todos/:todoId
Description: Retrieve a single TODO item by ID.
Response:
json
Copy code
{
  "_id": "60c72b2f9b1e8a3f244b4d31",
  "title": "Sample TODO",
  "description": "This is a sample TODO item",
  "completed": false,
  "createdAt": "2023-05-18T12:00:00.000Z",
  "updatedAt": "2023-05-18T12:00:00.000Z"
}
Update a TODO Item
Endpoint: PUT /todos/:todoId
Description: Update an existing TODO item by ID.
Request Body (example):
json
Copy code
{
  "title": "Updated TODO",
  "description": "This is an updated TODO item",
  "completed": true
}
Response:
json
Copy code
{
  "_id": "60c72b2f9b1e8a3f244b4d31",
  "title": "Updated TODO",
  "description": "This is an updated TODO item",
  "completed": true,
  "createdAt": "2023-05-18T12:00:00.000Z",
  "updatedAt": "2023-05-18T12:30:00.000Z"
}
Delete a TODO Item
Endpoint: DELETE /todos/:todoId
Description: Delete a TODO item by ID.
Response:
json
Copy code
{
  "message": "TODO item deleted successfully"
}
Error Handling
The API uses standard HTTP status codes to indicate the success or failure of API requests. Errors are returned in the following format:

json
Copy code
{
  "error": "Error message"
}
License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!
