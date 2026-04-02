import express from 'express';
import { addProduct, addProductPage, deleteProduct, getProduct, searchProduct, updateProduct, updateProductPage } from '../controllers/product.controller.js';

let Router = express.Router();
Router.use(express.json());

//get all products from database
Router.get('/', getProduct);
Router.get('/add-product', addProductPage);
Router.get('/update-product/:id', updateProductPage);
Router.get('/search', searchProduct)



//add product
Router.post('/product/add' , addProduct);

//update product
Router.put('/product/add/:id' , updateProduct);

//delete product
Router.delete('/product/add/:id', deleteProduct);

export default Router;