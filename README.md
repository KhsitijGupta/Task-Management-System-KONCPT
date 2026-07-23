# Task Manager - MERN Stack

A full-stack **Task Management System** built with the **MERN Stack** that enables users to efficiently manage daily tasks while providing administrators with a dedicated dashboard to monitor users, tasks, and overall system activity.

The project follows a **clean architecture**, using a **Controller → Service → Model** pattern on the backend and **Redux Toolkit** for state management on the frontend.

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Profile API
- Logout

---

## User Features

- Create Task
- Update Task
- Delete Task
- View Own Tasks
- Mark Task as Completed
- Search Tasks
- Filter Tasks
- Sort Tasks
- Pagination
- Dashboard Statistics

---

## Admin Features

- Admin Login
- Dashboard Statistics
- View All Users
- View All Tasks
- Change User Role
- Delete User
- Delete Any Task
- Role-Based Authorization

---

# Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- SweetAlert2
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator

---

# Folder Structure

## Backend

backend/
├── src/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── admin.controller.js
│ ├── auth.controller.js
│ └── task.controller.js
│
├── middlewares/
│ ├── auth.middleware.js
│ ├── error.middleware.js
│ ├── role.middleware.js
│ └── validator.middleware.js
│
├── models/
│ ├── User.js
│ └── Task.js
│
├── routes/
│ ├── admin.routes.js
│ ├── auth.routes.js
│ └── task.routes.js
│
├── utils/
│ ├── ApiError.js
│ ├── ApiResponse.js
│ └── asyncHandler.js
│
├── validators/
│ ├── auth.validator.js
│ └── task.validator.js
│
├── app.js
└── server.js

---

## Frontend

```
frontend/
│
├── src/
│
├── api/
│   └── axios.js
│
├── Redux/
│   ├── store.js
│   │
│   └── features/
│       ├── auth/
│       ├── task/
│       └── admin/
│
├── routes/
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
│
├── components/
│   ├── Dashboard/
│   ├── Admin/
│   ├── TaskCard/
│   ├── TaskModal/
│   └── Common/
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Home.jsx
│
└── App.jsx
```

---

# Database Models

## User

```js
{
  (name, email, password, role);
}
```

---

## Task

```js
{
  (title, description, priority, status, dueDate, createdBy);
}
```

---

# API Endpoints

## Authentication

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| POST   | /api/auth/register | Register User      |
| POST   | /api/auth/login    | Login User         |
| GET    | /api/auth/profile  | Get Logged-in User |

---

## Task

| Method | Endpoint                 |
| ------ | -------------------------|
| GET    | /api/tasks               |
| POST   | /api/tasks/createTask    |
| PUT    | /api/tasks/:id           |
| DELETE | /api/tasks/:id           |
| PATCH  | /api/tasks/:id/status    |

---

## Admin

| Method | Endpoint                  |
| ------ | ------------------------- |
| GET    | /api/admin/dashboard      |
| GET    | /api/admin/users          |
| PATCH  | /api/admin/users/:id/role |
| DELETE | /api/admin/users/:id      |
| GET    | /api/admin/tasks          |
| DELETE | /api/admin/tasks/:id      |

---

# Authentication Flow

```
Register
      │
      ▼
Password Hashing
      │
      ▼
Login
      │
      ▼
JWT Token
      │
      ▼
Protected Routes
```

---

# Role Based Authorization

```
Login
      │
      ▼
JWT Verification
      │
      ▼
Role Middleware
      │
      ├─────────────┐
      ▼             ▼
    Admin         User
      │             │
      ▼             ▼
Admin Panel   User Dashboard
```

---

# State Management

Redux Toolkit is used for global state management.

### Auth Slice

- Login
- Register
- Logout
- Profile

### Task Slice

- Get Tasks
- Create Task
- Update Task
- Delete Task
- Update Status
- Search
- Filter
- Pagination

### Admin Slice

- Dashboard Statistics
- Users
- Tasks
- Delete User
- Delete Task
- Update Role

---

# Security

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Request Validation
- Centralized Error Handling

---

# Installation


## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend.

```env
PORT = 5000

MONGO_URI = mongodb+srv://kshitijgupta2163_db_user:JrNWlavhqevRU7SL@cluster0.tuvmafm.mongodb.net/

JWT_SECRET=your_super_secret_key

CLIENT_URL=http://localhost:5173

NODE_ENV=development
```

Create a `.env` file inside the backend.(frontend)

VITE_API_BASE_URL=http://localhost:5000/api

---

# NPM Packages

## Backend

```bash
express
mongoose
jsonwebtoken
bcryptjs
dotenv
cors
express-validator
nodemon
```

## Frontend

```bash
react
react-router-dom
redux-toolkit
react-redux
axios
tailwindcss
sweetalert2
lucide-react
```

---

# Future Improvements

- Email Notifications
- Task Attachments
- Drag & Drop Tasks
- Activity Logs
- Analytics Dashboard
- Charts
- Dark Mode
- Docker Support
- Unit Testing
- Refresh Token Authentication

---

# Author

**Kshitij Gupta**

**MERN Stack Developer**

---

# License

This project is developed for educational and Selection purposes.
