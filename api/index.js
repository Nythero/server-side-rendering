const express = require('express')
const api = express.Router()
const squareData = require('./squareData.json')

api.get('/destacados', (req, res) => {
  const destacados = squareData.filter(square => square.esDestacado)
  res.status(200).json(destacados)
})

api.get('/prendas', (req, res) => {
  const prendas = squareData
  res.status(200).json(prendas)
})

module.exports = api
