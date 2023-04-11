const {categoryService} = require('../services/categoryService');

const createCategory = async (req,res)=>{
    try{
        const createCategory = await categoryService.createCategory(req.body);
        return res.status(200).send({
            message:"Successfully created category.",
            success:true,
            data:createCategory
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const removeCategory =async (req,res)=>{
    try{
        const removeCategory = await categoryService.deleteCategory(req.params.id);
        return res.status(200).send({
            message:"Successfully removed category.",
            success:true,
            data:removeCategory
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const updateCategory = async (req,res)=>{
    try{
        const updateCategory = await categoryService.updateCategory(req.params.id,req.body);
        return res.status(200).send({
            message:"Successfully updated category.",
            success:true,
            data:updateCategory
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const getCategory = async (req,res)=>{
    try{
        const category = await categoryService.getCategory(req.params.id);
        return res.status(200).send({
            message:"Successfully got category.",
            success:true,
            data:category
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:"Something went wrong."
        })
    }
}
const getAllCategory = async (req,res)=>{
    try{
        const categories = await categoryService.getAllCategory();
        return res.status(200).send({
            message:"Successfully fetched categories.",
            success:true,
            data:categories
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
    createCategory,
    removeCategory,
    updateCategory,
    getCategory,
    getAllCategory
}