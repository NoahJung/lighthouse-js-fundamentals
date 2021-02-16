function range (start, end, step){
  let result = [];

  if(start <= end && step > 0){
    result.push(start);
  
    const howMany = Math.floor((end - start) / step);
    
    for(let i = 0; i < Math.floor(howMany); i++){
      result.push(result[i] + step);
      
    }
    return result;
  }else{
    result = [];
    return result;
  }
  
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-9,2, -1));