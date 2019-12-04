const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const parser = require('xml2json')

app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = "./arquivo/31190871144000000103550010000017841200001059-procNfe.xml"

app.get('/lerNf', (req,res) => {
  fs.readFile(path,{encoding: 'utf-8'},function(err,data){
    if(err){
      throw err
    }
    
    const json = parser.toJson(data)
    const result = JSON.parse(json);

    console.log(result)
    res.json(result)
  })  
})


app.listen(8000)
