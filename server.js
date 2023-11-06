const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/css', staticPath('./node_modules/bootstrap/dist/css'))
app.use('/css', staticPath('./node_modules/animate.css/'))
app.use('/css', staticPath('./public/src/css'))
app.use('/js', staticPath('./node_modules/@popperjs/core/dist/umd'))
app.use('/js', staticPath('./node_modules/bootstrap/dist/js'))
app.use('/js', staticPath('./node_modules/jquery/dist'))
app.use('/img', staticPath('./public/src/img'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/homepage.html'))
})

app.post('/signin', (req, res) => {
    res.send(req.body)
})

app.listen(port, (err) => {
    console.log(`Listening on port ${port}…`)
})

function staticPath(url) {
    return express.static(path.join(__dirname, url))
}