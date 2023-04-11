const {productService} = require('../services/productService');

const createProduct = async (req,res)=>{
    try{
        const createProduct = await productService.createProduct(req.body);
        return res.status(200).send({
            message:"Successfully created product.",
            success:true,
            data:createProduct
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const removeProduct =async (req,res)=>{
    try{
        const removeProduct = await productService.deleteProduct(req.params.id);
        return res.status(200).send({
            message:"Successfully removed product.",
            success:true,
            data:removeProduct
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const updateProduct = async (req,res)=>{
    try{
        const updateProduct = await productService.updateProduct(req.params.id,req.body);
        return res.status(200).send({
            message:"Successfully updated product.",
            success:true,
            data:updateProduct
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const getProduct = async (req,res)=>{
    try{
        const product = await productService.getProduct(req.params.id);
        return res.status(200).send({
            message:"Successfully got product.",
            success:true,
            data:product
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const getAllProducts = async (req,res)=>{
    try{
        const products = await productService.getAllProduct();
        return res.status(200).send({
            message:"Successfully fetched products.",
            success:true,
            data:products
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}

const getProductsByCategory = async (req,res)=>{
    try{
        const products = await productService.getProductsByCategory(req.query);
        return res.status(200).send({
            message:"Successfully fetched products.",
            success:true,
            data:products
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }   
}

module.exports = {
    createProduct,
    removeProduct,
    updateProduct,
    getProduct,
    getAllProducts,
    getProductsByCategory
}