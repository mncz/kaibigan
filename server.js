const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use('/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')))
app.use('/css', express.static(path.join(__dirname, './node_modules/animate.css/')))
app.use('/css', express.static(path.join(__dirname, './public/css')))
app.use('/js', express.static(path.join(__dirname, './node_modules/@popperjs/core/dist/umd')))
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, './node_modules/jquery/dist')))
app.use('/img', express.static(path.join(__dirname, './public/img')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(port, (err) => {
    console.log(`Listening on port ${port}…`)
})