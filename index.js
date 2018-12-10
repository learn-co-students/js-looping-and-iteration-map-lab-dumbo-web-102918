// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function (element){return element.toLowerCase()})
}

function nameToAttributes(array){
  return array.map(function (element){return {firstName: element.split(" ")[0], lastName: element.split(" ")[1]}})
}
function attributesToPhrase(array){
  return array.map(function (element){return `${element.name} is from ${element.hometown}`})
}
