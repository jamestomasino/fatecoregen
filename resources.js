var fs = require('fs')
const aspectsChar = fisherYates(fs.readFileSync('data/aspects_character.txt').toString('utf-8').split('\n'))
const skills = fisherYates(fs.readFileSync('data/skills.txt').toString('utf-8').split('\n'))
const namesMale = fisherYates(fs.readFileSync('data/names_male.txt').toString('utf-8').split('\n'))
const namesFemale = fisherYates(fs.readFileSync('data/names_female.txt').toString('utf-8').split('\n'))
const namesLast = fisherYates(fs.readFileSync('data/names_last.txt').toString('utf-8').split('\n'))
const names = fisherYates(namesMale.concat(namesFemale))
const stunts = fisherYates(fs.readFileSync('data/stunts.txt').toString('utf-8').split('\n'))

function fisherYates (arr) {
  var newArr = []
  while (arr.length) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    var element = arr.splice(randomIndex, 1)
    if (element[0]) newArr.push(element[0])
  }
  return newArr
}

module.exports = { aspectsChar, skills, names, namesLast, namesMale, namesFemale, stunts }
