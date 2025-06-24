import colors from 'colors'
import server from "./server"

 const port = process.env.PORT ||  4000
server.listen(port, () => {
    console.log( colors.cyan.bold( `Servidor Funcionanado en el puerto: ${port} `) )
})


let productName = "Tablet"
let isAuth = false
let price = 30

interface Product  {
    id: number
    price: number
    name: string
}

let product : Product = {
    id: 1,
    price: 30,
    name: "Tablet"
}

let product2 : Product = {
    id: 2,
    price: 30,
    name: "Tablet 11 pulgadas"
}

const numbers = [10, 20, 30]