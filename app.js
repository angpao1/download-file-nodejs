var express = require('express');
var router = express.Router();
const dd = require('./down.route')
const app = express()
app.use(express.json())
app.use('/download', dd)

app.listen(4000, () => {
    console.log(`Server started at port : 4000`)
})