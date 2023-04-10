import express from 'express'
import router from './routes/transactions.js'
import mongoose from 'mongoose'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

mongoose.connect("mongodb://localhost:27017/bank", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

app.use('/', router)

const port = 4200
app.listen(port, function () {
    console.log(`Running on http://localhost:${port}`)
})