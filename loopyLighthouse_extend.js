/*
function loopyLighthouse(range, multiples, words){

}


*/

function loopyLighthouse(range, multiples, words){
  const startNum = range[0];
  const lastNum = range[1];

  let resultArray = [];
 
  for (let i = startNum; i <= lastNum; i++){
    
    if(i % (multiples[0] * multiples[1]) === 0){
      resultArray.push(words[0] + words[1]);
    }else if(i % multiples[0] === 0){
      resultArray.push(words[0]);
    }else if(i % multiples[1] === 0){
      resultArray.push(words[1]);
    }else{
      
      resultArray.push(i);
    }
    
  }
  return resultArray;
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));