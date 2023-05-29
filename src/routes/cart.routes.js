import { Router } from "express";
import { CartManager } from "../CartManager.js";
import { cartModel } from "../models/Cart.js";

//const cartmanager = new CartManager ('carrito.txt')

const cartRouter = Router()


cartRouter.get('/:cid', async (req, res) => {
    const cart = await cartModel.findOne({_id: req.params.cid})
    res.send(cart)
    
})

cartRouter.post('/', async (req,res) => {
    const cart = await cartModel.create({})
    res.send("carrito creado")
})

cartRouter.post('/:cid/product/:pid', async (req, res) => {
    try {
      const cid = req.params.cid
      const pid = req.params.pid
      const { quantity } = req.body
  
      const cart = await cartModel.findOne({_id: cid})
      const addProductCart = {
        id_prod: pid,
        cant: quantity
      }
      cart.products.push(addProductCart)
      cart.save()
    } catch (err) {
      console.log(err)
    }
    res.send('Producto agregdo al carrito')
  })
  
  cartRouter.delete('/:cid/product/:pid', async (req, res) => {
    try {
      const cid = req.params.cid
      const pid = req.params.pid
    
  
      const cart = await cartModel.findOne({_id: cid}).deleteOne({id_prod: pid})
      
      
    } catch (err) {
      console.log(err)
    }
    res.send('Producto eliminado del carrito') 
  })
/*cartRouter.post('/', async (req,res) => {
    
    const {idCart, id, cantidad} = req.body
    const mensaje = await cartmanager.addProductCart(idCart,{id, cantidad})
    res.send(mensaje)
})*/



export default cartRouter