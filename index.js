const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.static('public'))

const APTCourses = ['APT1', 'APT2', 'APT3', 'APT4', 'APT5']
const ISTCourses = ['IST1', 'IST2', 'IST3']

app.get('/', function (req, res) {
    res.render('index')

})

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/results', urlEncodedParser, function (req, res) {
    if (req.body.courses == 'IST') {
        res.render('Courses',{course: ISTCourses})
        
    }
    else{
        res.render('Courses',{ course:APTCourses})
    }
    
})

// app.get('/results', function(req, res) {
//     res.render('Courses', {Course1: 'Math', Course2: 'Physics', Course3: 'Chemistry'})
// })

// app.get('/results', function(req, res) {
//     res.render('Courses', {Course1: 'Geology', Course2: 'History', Course3: 'Art'})
// })



app.listen(port)
console.log('Server is listening on port 3000')