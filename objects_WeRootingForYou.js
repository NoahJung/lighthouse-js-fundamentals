const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  
  let metrics = [];
  let score = 0;
  let highNum = 0;

  for(let i = 0; i < vegetables.length; i++){
    const getValue = vegetables[i][metric];
    metrics.push(getValue);
  }
  
console.log(metrics);

  for(let j = 0; j < metrics.length; j++){
    
    if(metrics[j] > score){
      score = metrics[j];
      highNum = j;
    }
    
  }
  
  return vegetables[highNum].submitter;
  
}
console.log(judgeVegetable(vegetables, metric));