

function merge(input1, input2){
  let combine = [];
  combine = input1;

  for (let i = 0; i < input2.length; i++){
    combine.push(input2[i]);
  }

  combine.sort(function(a,b){
    return a - b;
  })

  return combine;
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);