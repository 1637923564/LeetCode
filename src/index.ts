import displayTable from "./medium/displayTable";

const displayTableVal = displayTable(
  [
    ["David","3","Ceviche"],
    ["Corina","10","Beef Burrito"],
    ["David","3","Fried Chicken"],
    ["Carla","5","Water"],
    ["Carla","5","Ceviche"],
    ["Rous","3","Ceviche"]
  ]
)

let kk = {
  '3': {
    Ceviche: 2,
    'Fried Chicken': 1
  },
  '10': {
    'Beef Burrito': 1
  },
  '5': {
    'Water': 1,
    Ceviche: 1
  }
}
let ret = [
  ['']
]

console.log(displayTableVal);
