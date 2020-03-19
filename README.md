# sw-fanclub

This API will return all the characters of a Star Wars movie.
Made in Node.js with Express framework.

To search for all the characters from a specific movie.
(you should search for one of the Star Wars movies)

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


After cloning this project, install all dependencies with

`
npm i
`

To run it

`
npm start
`