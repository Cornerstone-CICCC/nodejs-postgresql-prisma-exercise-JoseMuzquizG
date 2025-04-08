import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()

const allProducts = async () => {
    return await prisma.product.findMany()
}

const productsById = async (id: number) => {
    return await prisma.product.findUnique({where: {id}})
}

const createProduct = async (data: Omit<Product, 'id'>) => {
    return await prisma.product.create({ data })
}

const editProductById = async (id: number, data: Partial<Product>) => {
    const selectProd = await productsById(id)
    if (!selectProd) return null
    const updateProd = {
        productName: data.productName ?? selectProd.productName, 
        price: data.price ?? selectProd.price 
    }
    return await prisma.product.update({where: {id}, data: updateProd})
}

const removeProd = async(id: number) => {
    return await prisma.product.delete({where: {id}})
}

export default {
    allProducts,
    productsById,
    createProduct,
    editProductById,
    removeProd
}