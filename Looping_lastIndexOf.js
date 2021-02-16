function lastIndexOf(given, num){
  var result = -1;

  for(let i = given.length - 1; i >= 0; i--){
    if(given[i] === num){
      result = i;
      break;
    }else{
      result = -1;
    }
  }
  return result;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);