# sw-fanclub

After cloning this project, install all dependencies with

`
npm i
`

To run it

`
npm start
`

This API will return all the characters of a Star Wars movie.

To search for a specific movie

`
http://localhost:3000/characters?search=<SEARCH TERM HERE>
`

To sort the characters by height in ascending order

`
http://localhost:3000/characters?search=<SEARCH TERM HERE>&order=ASC
`

To sort the characters by height in descending order

`
http://localhost:3000/characters?search=<SEARCH TERM HERE>&order=DESC
`
