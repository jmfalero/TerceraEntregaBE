import express from "express"
import ProductManager from "./components/ProductManager.js"

const app = express()
app.use(express.urlencoded({ extended: true }));

const productos = new ProductManager();
const getProducts = productos.getProducts();

app.get ("/products", async (req,res) => {
    let limit = req.query.limit; 
    res.send(await getProducts)
});

const PORT= 8080;
const server = app.listen (PORT, () =>{
    console.log(`Expres por Local Host ${server.adress().port}`)

})
server.on("error",(error) => console.log(`Error del Servidor ${error}`))