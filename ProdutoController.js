const { connect } = require('./ProdutoRepository')
const produtoModel = require('./ProdutoSchema')

connect()

const getAll = () => {
  return produtoModel.find((error, produto) => {
    return produto
  })
}


const getById = (id) => {
  return produtoModel.findById(id)
}


const add = (produto) => {
  const newProduto = new produtoModel(produto)
  return newProduto.save()
}



module.exports = {
  getAll,
  getById,
  add
}
