const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  var goodStation = [];
  
  for(const station of stations){
    var capacity = station[1];
    
    if(capacity >= 20){
      const type = station[2];

      if(type === "school" || type === "community centre"){
        goodStation.push(station[0]);
      }
    }
  }
  return goodStation;
}

console.log(chooseStations(stations));