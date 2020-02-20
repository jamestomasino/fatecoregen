#!/usr/bin/env node
const { aspectsChar, skills, names, namesLast, namesMale, namesFemale, stunts } = require('./resources')

console.log(names[0], namesLast[0])

console.log('Aspects:')
for (let i = 0; i < Math.ceil(Math.random() * 3); ++i) {
  console.log('  ' + aspectsChar[i])
}
console.log('Skills:')
const maxSkills = Math.ceil(Math.random() * 3)
for (let i = 0; i < maxSkills; ++i) {
  console.log('  ' + skills[i] + ' +' + (maxSkills - i))
}
if (maxSkills > 2) {
  console.log('Stunt:')
  console.log('  ' + stunts[0])
}
