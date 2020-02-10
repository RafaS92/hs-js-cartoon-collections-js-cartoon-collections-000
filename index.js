
function dwarfRollCall(dwarves) {
  let newlist=[]
for(let i = 0;i < dwarves.length;i++){
  newlist.push (`${i+1}. ${dwarves[i]} `)
}

return newlist.join("")
}

function summonCaptainPlanet(planeteerCalls){
  let upperlist = []
  for(let i = 0; i<planeteerCalls.length; i++){
     upperlist.push(`${planeteerCalls[i]}`.toUpperCase() + '!')
  }
  return upperlist
}

function longPlaneteerCalls(calls){
  for (let i = 0; i < calls.length; i++){
    if (calls[i].length > 4) {
      return true
  }
}
return false
}

function findTheCheese(ingredients){
  for (let i = 0; i < ingredients.length; i++){
  if  ( ingredients[i] == "cheddar" || ingredients[i] == "gouda" || ingredients[i] == "camembert"){
    return ingredients[i]
  }
}
return "no cheese!"
}