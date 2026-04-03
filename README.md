# 🛒 Product Management Web App

A clean and minimal Product Management Web Application built with Node.js, Express.js, MongoDB, and EJS using the MVC architecture.

This project demonstrates a complete CRUD system with server-side rendering and a search feature.

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

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- EJS  

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

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/product-app.git
cd product-app
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/productDB
4. Run the Application
npm start
5. Development Mode (Optional)
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
