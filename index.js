function dwarfRollCall(array) {
  let newlist=[];
for(let i = 0;i < array.length;i++){
  newlist.push (`${i+1}. ${array[i]} `);
}

<<<<<<< HEAD
return newlist.join("");
=======
return newlist.join("")

>>>>>>> 30c293e4f7873a75f8cdf705a8b75942a794800c
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

<<<<<<< HEAD

function findTheCheese(array){
  for (let i = 0; i < array.length; i++){
  if  ( array[i] == "cheddar" || array[i] == "gouda" || array[i] == "camembert"){
    return array[i];
  }
}
return "no cheese!";
=======
function findTheCheese(ingredients){
ingredients.find(function(ingredient){
if (ingredient== 'cheddar'|| ingredient == 'gouda' || ingredient =='camebert'){

return ingredient

}

})
return "no cheese!"
>>>>>>> 30c293e4f7873a75f8cdf705a8b75942a794800c
}
