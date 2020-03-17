const express = require("express")
const axios = require('axios')

const PORT = process.env.PORT || 8000
const app = express()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain)

app.set("json spaces", 2)

app.get("/", (req, res) => {
    res.send("Welcome to your App!")
})

app.get("/characters", (req, res) => {
    const searchTerm = req.query.search ? '?search=' + req.query.search : ""
    const sortDirection = req.query.order

    if(!searchTerm) { throw new Error('Add a search term')}
    
    axios.get("https://swapi.co/api/films" + searchTerm)
        .then(response => {
            const allCharacters = response.data.results.map(film => film.characters)
            const personsOneMovie =  allCharacters[0]
            const promisesOfPersons = personsOneMovie.map(person => 
                axios.get(person).then(result => result.data)
            )
            Promise.all(promisesOfPersons)
                .then(people => {
                    if (sortDirection === 'ASC') people.sort((a, b) => a.height - b.height)
                    if (sortDirection === 'DESC') people.sort((a, b) => b.height - a.height)
                    res.json(people)
                })
            })
        .catch(error => {
            throw new Error('Error')
        })
})

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`)
})
