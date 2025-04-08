"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.allProducts();
        res.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error finding all products.' });
    }
});
const getProdById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const product = yield product_model_1.default.productsById(id);
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error finding product by id.' });
    }
});
const addProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, price } = req.body;
        const product = yield product_model_1.default.createProduct({
            productName,
            price
        });
        res.status(200).json({ product });
    }
    catch (err) {
        console.error(err);
        res.status(500).json(({ message: 'Error creating product.' }));
    }
});
const updateProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const { productName, price } = req.body;
        const product = yield product_model_1.default.editProductById(id, {
            productName,
            price
        });
        res.status(200).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating product.' });
    }
});
const deleteProd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const delProd = yield product_model_1.default.removeProd(id);
        res.status(200).json({ message: 'Product deleted succesfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting product.' });
    }
});
exports.default = {
    getAllProducts,
    getProdById,
    addProd,
    updateProd,
    deleteProd
};
