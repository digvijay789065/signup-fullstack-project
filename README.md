# 🧩 Signup System — Node.js + Express + MySQL

This is a **simple full-stack signup project** built using **Node.js**, **Express**, and **MySQL**.  
It securely registers users by storing their details in a database with **bcrypt** password hashing.

---

## 🚀 Features

- ✅ User registration with name, email, phone, and password  
- 🔒 Secure password hashing using **bcrypt**  
- 🗄️ Stores data in **MySQL database**  
- 🌐 Backend built with **Express.js**  
- ⚙️ Ready to integrate with any frontend (HTML, React, etc.)

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MySQL |
| Security | bcrypt |
| Tools | Postman, VS Code, npm |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/signup-system-nodejs-mysql.git
cd signup-system-nodejs-mysql
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup MySQL database
```sql
CREATE DATABASE signup_db;
USE signup_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

### 4️⃣ Configure database connection
In the `db.js` file, update your credentials:
```js
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'signup_db'
});
module.exports = db;
```

### 5️⃣ Run the server
```bash
node server.js
```

You should see:
```
🚀 Server running at http://localhost:5000
```

---

## 📬 API Endpoint

### **POST /signup**
Registers a new user.

**Request Body:**
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully"
}
```

---
