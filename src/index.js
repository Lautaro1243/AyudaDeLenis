const express = require('express')
const routes = require('./routes')
const {genericMiddleware} = require('./middlewares')
const app = express()
const PORT = 3000

app.use(express.json())

app.use(genericMiddleware.requestTime)
app.use(routes.seriesRoute)
app.use(routes.usuariosRoute)
app.listen(PORT, ()=>{
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
})