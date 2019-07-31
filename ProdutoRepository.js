const mongoose = require('mongoose')


const MONGO_URL = "  ---- Aruivo cvs----"

function connect (){


  mongoose.connect(MONGO_URL,
  {useNewUrlParser: true},
  function (error){
    if (error){
      console.log('ERROR: ', error)
    }else{
      console.log('------Database is connected.------')
    }
  }
  );


}

module.exports = { connect }
