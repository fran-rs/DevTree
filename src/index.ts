import server from "./server"

 const port = process.env.PORT ||  4000  

server.listen(port, () => {
    console.log('Servidor Funcionanado en el puerto:', port)
})