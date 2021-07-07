const express = require('express')
const cors = require('cors')
const app = express()
const apiPort = 3000

app.use(cors())

const dbo = require("./db/index")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(apiPort, () => {
    console.log(`Server running on port ${apiPort}`)
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    })
  })
