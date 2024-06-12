# Todo API

This is a simple Todo API built with Node.js, Express, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installing

1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-api.git
```
2. Install dependencies
```bash
cd todo-api
npm install
```
3. Create a `.env` file in the root directory of the project and add the following:
  ```bash
PORT=5005
MONGO_URI=mongodb://localhost:27017
```
4. Start the server
  ```bash
npm start
```
### API Endpoints
- GET `/todos`: Fetch all todos
- GET `/todos/:id`: Fetch a single todo by its id
- POST `/todos`: Create a new todo
- PATCH `/todos/:id`: Update a todo by its id
- DELETE `/todos/:id`: Delete a todo by its id

### API Example
[Link](https://www.apidog.com/apidoc/shared-0641e053-1d4f-47ba-b68f-f3dea05e9318)

### Built With
- Node.js
- Express
- MongoDB
