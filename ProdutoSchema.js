const mongoose = require("mongoose")

var Schema = mongoose.Schema;
var ProdutoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    preco: { type: String, required: true  }
})

const produtoModel = mongoose.model("produto", ProdutoSchema)

module.exports = produtoModel
