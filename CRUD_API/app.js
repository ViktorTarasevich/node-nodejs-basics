require('dotenv').config()
const express = require('express')
const router = require('./routes/user.routes')
const PORT = process.env.PORT
const app = express()


app.use(express.json())

app.use('/api', router)
//app.use(express.static('public'))
//app.engine('html', require('ejs').renderFile)
//app.set('view engine', 'ejs');

const start = async() => {
    try {
        app.listen(process.env.PORT, () => console.log(`Server start ${PORT}`))
    } catch (e){
        console.log(e)
    }
}
start()
