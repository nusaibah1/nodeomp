import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'




const productRouter = express.Router()
productRouter.use(bodyParser.json())

// Retrieve all Products
//verifyAToken 
productRouter.get('/', (req, res) => {
products.fetchProducts(req, res)
})

// Recent Products
productRouter.get('/new', (req, res) => {
    products.recentProducts(req, res)
})

//Rerieve Single Product

productRouter.get('/:id',  (req, res) => {  
    products.fetchProduct(req, res)
})

// Add product

productRouter.post('/addProduct', (req, res) => {  
    products.addProduct(req, res)
})

//Update product

productRouter.patch('/update/:id', (req, res) => { 
    products.updateProduct(req, res)
})

//Delete Product

productRouter.delete('/delete/:id',  (req, res) => { 
    products.deleteProduct(req, res)
})

export {
    productRouter
}
