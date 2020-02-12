function dwarfRollCall(array) {
  let newlist=[];
for(let i = 0;i < array.length;i++){
  newlist.push (`${i+1}. ${array[i]} `);
}

return newlist.join("");
}

function summonCaptainPlanet(array){
  let upperlist = [];
  for(let i = 0; i<array.length; i++){
     upperlist.push(`${array[i]}`.toUpperCase() + '!');
  }
  return upperlist;
}

function longPlaneteerCalls(array){
  for (let i = 0; i < array.length; i++){
    if (array[i].length > 4) {
      return true;
  }
}
return false;

}


function findTheCheese(ingredients){
  for (let i = 0; i < ingredients.length; i++){
  if  ( ingredients[i] == "cheddar" || ingredients[i] == "gouda" || ingredients[i] == "camembert"){
    return ingredients[i];
  }
}
return "no cheese!";
}

function findTheCheese(array){
  for (let i = 0; i < array.length; i++){
  if  ( array[i] == "cheddar" || array[i] == "gouda" || array[i] == "camembert"){
    return array[i];
  }
}
return "no cheese!";
}
