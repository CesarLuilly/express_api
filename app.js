//  //Usando objeto express
const express = require('express')
//  //App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
//  //Puerto inicial, respondera a la url local host:3000
const port = 3000

//  //HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`);
    const explorer1 = {id: 1, name: "Cesar"}
    const explorer2 = {id: 2, name: "Cesar"}
    const explorer3 = {id: 3, name: "Cesar"}
    const explorer4 = {id: 4, name: "Cesar"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//  //Get Creando un endpoint que regrese en explorer mediante un ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`getting explorers with id ${req.params.id}`);
    const explorer = {id:1, name: "Cesar"}
    res.status(200).json(explorer)
})

//  //POST Crear un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(201).json({message: "Created"})
})

//  //PUT Crear un endpoint que se encargue de actualizar un explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Updated!"})
})

//  //DELETE Crear un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(200).json({message: "Deleted"})
})

//  //path inicial, respondera a la url localhost:3000
//  //Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})