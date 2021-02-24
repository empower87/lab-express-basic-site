const express = require('express')
const app = express()
const movies = require('./movies')

app.use(express.static('public'))

app. get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app. get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})
app. get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})
app. get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
})
app.get('/movies', (req, res) => {
    console.log(req.query)// {title: 'The Godfather'}
    let filteredMovies = movies.filter((each) => {
    return (each.title.includes(req.query.title))
    res.json({filteredMovies})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
})