const smartGarbage = function (trash, bins) {
  const kinds = Object.keys(bins);
  

  for (let i = 0; i < kinds.length; i++){
    if(trash === kinds[i]){
      bins[kinds[i]] += 1;
    }
  }
  return console.log(bins);
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });