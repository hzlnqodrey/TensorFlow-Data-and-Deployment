const express = require('express')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'ungraded_lab')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'C1_W2_Lab_1_mnist.html'))
})

app.listen(port, () => {
  console.info(`Server listening on port ${port}`)
});