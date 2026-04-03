# 🛒 Product Management Web App

A clean and minimal Product Management Web Application built with Node.js, Express.js, MongoDB, and EJS using the MVC architecture.

This project demonstrates how to build a complete CRUD system with server-side rendering and a simple search functionality.

---

## 🚀 Features

- View all products
- Add new products
- Edit existing products
- Delete products
- Search products by name
- MVC-based scalable structure
- Server-side rendering with EJS

---

## 🛠 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- View Engine: EJS
- Architecture: MVC

---

## 📂 Project Structure
product-app/
│
├── models/
│ └── Product.js
│
├── views/
│ └── products/
│ ├── index.ejs
│ ├── add.ejs
│ └── edit.ejs
│
├── controllers/
│ └── productController.js
│
├── routes/
│ └── productRoutes.js
│
├── public/
│
├── server.js
├── package.json
└── README.md


---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/product-app.git
cd product-app

### 2. Install dependencies
```bash
npm install

### 3. Configure environment variables
Create a .env file in the root directory:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/productDB

### 4. Run the application
```bash
npm start

##For development (optional):
```bash
npm run dev

🌐 Application Routes
Method	Endpoint	Description
GET	/products	List all products
GET	/products/add	Show add product form
POST	/products/add	Create new product
GET	/products/edit/:id	Show edit form
POST	/products/edit/:id	Update product
POST	/products/delete/:id	Delete product

🔍 Search Functionality
The application includes a simple search feature to filter products by name.

Usage
/products?search=keyword
Example
/products?search=phone
