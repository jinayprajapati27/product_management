import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config.js';
import { fileURLToPath } from 'url';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret : "hello",
   resave : true,
   saveUninitialized:false 
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.set('view engine', 'ejs');

let PORT = process.env.PORT || 8080;
app.use('/', productRoutes);

app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
});