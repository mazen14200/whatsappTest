const express = require('express')
//const cors = require('cors')

const app = express()

//app.use(cors())
const port = 3000||process.env.port
const bodyParser = require('body-parser')

app.use((req, res, next) => {
  const timeout = 30000; // 30000 مللي ثانية = 30 ثواني
  res.setTimeout(timeout, () => {
      console.log('Request has timed out.');
      //res.status(503).send({status:"false",response:'Request timed out.'});
      res.status(200).send({status:"false",response:'Request timed out.'});
  });

  next();
});

const router = require("./routers/wa");
app.use(bodyParser.json());
app.use("/",router);
/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})