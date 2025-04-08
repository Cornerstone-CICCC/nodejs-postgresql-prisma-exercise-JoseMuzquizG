import { Request, Response } from "express";
import { Product } from "@prisma/client";
import productModel from "../models/product.model";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.allProducts()
        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error finding all products.'})
    }
}

const getProdById = async (req: Request<{id: number}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.productsById(id)
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error finding product by id.'})
    }
}

const addProd = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
    try {
        const { productName, price } = req.body
        const product = await productModel.createProduct({
            productName,
            price
        })
        res.status(200).json({product})
    } catch (err) {
        console.error(err)
        res.status(500).json(({message: 'Error creating product.'}))
    }
}

const updateProd = async (req: Request<{id: string}, {}, Partial<Product>>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { productName, price } = req.body
        const product = await productModel.editProductById(id, {
            productName,
            price
        })
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error updating product.'})
    }
}

const deleteProd = async (req: Request<{id: number}>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const delProd = await productModel.removeProd(id)
        res.status(200).json({message: 'Product deleted succesfully'})
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error deleting product.'})
    }
}

export default {
    getAllProducts,
    getProdById,
    addProd,
    updateProd,
    deleteProd
}