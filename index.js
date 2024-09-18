const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const port = 3000||process.env.port
const bodyParser = require('body-parser')

const router = require("./routers/wa");
app.use(bodyParser.json());
app.use("/",router);
/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})