import "dotenv/config"
import express, { urlencoded } from "express"
import mongoose from "mongoose"
import { userModel } from "./models/Users.js"
import { productModel} from "./models/Products.js"
import { cartModel } from "./models/Cart.js"

const app = express()

app.use (express.json())
app.use (express.urlencoded({extended:true}))


mongoose.connect(process.env.URL_MONGODB_ATLAS)
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log("Error en MongoDB Atlas:", error));

/*await userModel.create([{
    first_name: "Emily", last_name: "Esmeralda", email: "emily@emily.com", gender: "f", password: "1234"
},
{
    first_name: "Eduardo", last_name: "Diaz", email: "edu@edu.com", gender: "m", password: "5678"
},
{
    first_name: "Aldana", last_name: "Alvarez", email: "a@a.com", gender: "f", password: "9012"
},
])*/

/*await productModel.create([{
    title:"Salame",
    description:"Picado grueso",
    code:"SG1",
    category:"fiambre",
    price:1500,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Leber",
    description:"De tripa",
    code:"LT1",
    category:"fiambre",
    price:500,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Jamon crudo",
    description:"Parma",
    code:"JC1",
    category:"jamon",
    price:2500,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Mortadela",
    description:"Bochita",
    code:"MB1",
    category:"fiambre",
    price:1700,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Queso pategras",
    description:"Paulina",
    code:"QP1",
    category:"queso",
    price:1500,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Queso provolone",
    description:"Paulina",
    code:"QR1",
    category:"queso",
    price:3500,
    stock:20,
    status:true,
    tumbnail:[]
},
{
    title:"Queso roquefort",
    description:"Veronica",
    code:"QA1",
    category:"queso",
    price:1500,
    stock:20,
    status:true,
    tumbnail:[]
}
])*/

/*await cartModel.create([
     {
        type: [
            {
                id_prod:
                    "QR1"
                ,
                cant: 5
            }
        ],
        default:[]
    }
])*/

app.listen(process.env.PORT, ()=> {
    console.log("Server on port", process.env.PORT)
})
