import { Product } from '../model/product.Model.js';

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.render('index', { products });
    } catch (error) {
        console.log(`Error found : ${error.message}`);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const addProductPage = async (req, res) => {
    try {
        res.render('add-product');
    } catch (error) {
        console.log(`Error found : ${error.message}`);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const updateProductPage = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).send("Product not found");
        res.render('update-product', { product });
    } catch (error) {
        console.log(`Error found : ${error.message}`);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const searchProduct = async(req, res) => {
    try {
        const products = await Product.find({
            name: {
                $regex: req.query.name,
                $options: "i"
            }
        })
        res.render('index', { products });
    } catch (error) {
        console.log(`Error found : ${error.message}`);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const addProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, messege: "All Fields Are Required" })
    }

    try {
        const NewProduct = new Product({
            name: product.name,
            price: product.price,
            image: product.image,
        });
        await NewProduct.save();
        req.flash('success', '✨ Boom! New product added to the collection.');
        res.status(201).json({ success: true, message: "Product Added Successfully", data: NewProduct });
    } catch (error) {
        console.log("Error While Adding Product", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const updateProduct = async (req, res) => {
    const productName = req.params.id;

    if (!productName) {
        return res.status(400).json({ success: false, messege: "Product ID Is Required" })
    }

    try {
        const NewProduct = await Product.findOneAndUpdate(
            { _id: productName },
            { $set: req.body },
            // { new: true }
        );
        req.flash('success', 'Product details updated successfully.');
        res.status(201).json({ success: true, message: "Product Updated Successfully", data: NewProduct });
    } catch (error) {
        console.log("Error While Updating Product", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const productID = req.params.id;

    if (!productID) {
        return res.status(400).json({ success: false, messege: "Product ID Is Required" })
    }
    try {
        const product = await Product.findByIdAndDelete(productID);
        if (!product) {
            return res.status(400).json({ success: false, message: "Product Not Found..!!" });
        }
        req.flash('success', 'Product has been removed.');
        return res.status(200).json({ success: true, message: "Product Deleted Successfully", data: product });
    } catch (error) {
        console.log("Error While Deleting Product", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
