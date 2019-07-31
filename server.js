const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ProdutoController')
const PORT = 8000

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/produtos', async (request, response) => {
  controller.getAll()
    .then(produto => response.send(produto))
})
server.get('/produto/:id', (request, response)=>{
  const id = request.params.id
    controller.getById(id)
      .then(produto => {
        if(!produto){ // produto === null || produto === undefined
          response.sendStatus(404) // produto nao encontrada
        } else {
          response.send(produto) // Status default é 200
        }
      })
      .catch(error => {
        if(error.name === "CastError"){
          response.sendStatus(400) // bad request - tem algum parametro errado
        } else {
          response.sendStatus(500) // deu ruim, e nao sabemos oq foi
        }
      })
  })
server.post('/produto/add', (request, response) => {
  controller.add(request.body)
    .then(produto => {
      const _id = produto._id
      response.send(_id)
    })
    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.listen(PORT)
console.log("------Server is working------")
console.log("PORT : http://localhost:8000/produto/")
