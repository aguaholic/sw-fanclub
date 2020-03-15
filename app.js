const express = require("express")
const axios = require('axios')

const PORT = process.env.PORT || 3000
const app = express()

app.set("json spaces", 2)

app.get("/", (req, res) => {
    res.send("Welcome to your App!")
})

app.get("/characters", (req, res) => {
    let searchTerm = req.query.search

    axios.get("https://swapi.co/api/films?search=" + searchTerm)
        .then(response => {
            let allCharacters = response.data.results.map(film => film.characters)
            let personsOneMovie =  allCharacters[0]
            let promisesOfPersons = personsOneMovie.map(person => 
                axios.get(person).then(result => result.data)
            )
            Promise.all(promisesOfPersons)
                .then(people => res.json(people))
            })
        .catch(error => {
            res.json("Error ocurred")
        })
})

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`)
})
