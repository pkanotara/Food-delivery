
# 🍽️ Food Delivery Web App

A full-stack food ordering web application inspired by Petpooja, built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**. This app features a customer interface, admin dashboard, and backend API — all fully functional.

---

## 📂 Project Structure

```
mern-food-delivery-app/
├── frontend/     # Customer-facing React app
├── backend/      # Express.js API server
└── admin/        # Admin dashboard to manage orders/products
```

---

## 🚀 Features

### 👨‍🍳 User (Frontend)
- Browse food categories (Thali, Pizza, Chicken, etc.)
- Search for food items
- Add items to cart
- Place orders
- User registration & login
- View past orders

### 🧑‍💼 Admin Panel
- View all orders
- Add, edit, delete food items
- Admin dashboard UI

### ⚙️ Backend
- RESTful API with Express.js
- MongoDB with Mongoose ODM
- JWT-based authentication
- Image upload support (Multer)
- Role-based access (admin, user)

---

## 💻 Tech Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Frontend   | React.js + Vite                    |
| Admin UI   | React.js + Vite                    |
| Backend    | Node.js + Express.js              |
| Database   | MongoDB + Mongoose                |
| Auth       | JWT                                |
| Styling    | CSS Modules                        |
| File Upload| Multer                             |

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/pkanotara/Petpooja-Food-delivery-.git
cd Petpooja-Food-delivery-
```

---

### 2. Set Up Backend

```bash
cd backend
npm install
```

#### Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

```bash
npm start
```

---

### 3. Set Up Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

### 4. Set Up Admin Dashboard

```bash
cd ../admin
npm install
npm run dev
```

---

## 🔐 Environment Variables

You must create a `.env` file in the `backend` directory. Here's a safe example:

### `.env.example`

```
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
```

---


---


## 🙋‍♂️ Author

**Pravin Kanotara**  
GitHub: [@pkanotara](https://github.com/pkanotara)

---
