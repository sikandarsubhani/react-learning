/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/about', (req, res) => {
  res.send('Peter Griffin')
})

app.get('/contct', (req, res) => {
  res.send('roadhouse')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})