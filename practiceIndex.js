const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/contacts', function(req, res) {
    res.render('contact_us')
})

app.post('/process_contacts', urlEncodedParser, function(req, res) {
    res.end('Thank you ' + req.body.first_name + ' ' + req.body.last_name)
})

app.listen(port)
console.log('Server is listening on port 3000')