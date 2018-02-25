var students = require('./board.js')
let Class = students.students
var victims = chooseWho()
var amountOfNonVictims = whoArent()

function chooseWhoToCheatOff() {
  var chosen = Class.map(student => {
    student.pals[flipCoin()]
  })
  return chosen
}

function chooseWho(){
  var chosen = []
 for (var i = 0; i < Class.length; i++) {
  chosen.push(Class[i].pals[flipCoin()])
 }
 return chosen
}

// go through the class check if their name is on the list if it is remove them
// then return that array
function whoArent() {
  uniqueArray = victims.filter(function(item, pos) {
      return victims.indexOf(item) == pos;
  })
  var amount = makePositive(uniqueArray.length - 8)
  return amount
}

function makePositive(num){
  if (num < 0) {
  num = -num;
 }
return num
}

function flipCoin() {
  let heads = (Math.floor(Math.random() * 2)== 0)
  if (heads) {
  return 0
  }
  else {
    return 1
  }
}
console.log(amountOfNonVictims)
