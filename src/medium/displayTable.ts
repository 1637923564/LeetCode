// 1418. 点菜展示表
export default function displayTable(orders: string[][]): string[][] {
  let ret: string[][] = []
  const tables: Map<string, Map<string, number>> = new Map()
  // 之所以选择使用Set，是因为它的实例不会有重复的元素，可以达到去重的效果
  const foodsList: Set<string> = new Set()
  // 将数组处理成类似于{ code: { foods: foodsNumber } }这样的集合
  for (const [person, code, foods] of orders) {
    foodsList.add(foods)
    if (!tables.has(code)) {
      tables.set(code, new Map([[foods, 1]]))
    } else {
      let codeMap = tables.get(code)
      let foodsNumber = codeMap.get(foods)
      codeMap.set(foods, foodsNumber ? foodsNumber + 1 : 1)
    }
  }

  const foodsArr = [...foodsList].sort()
  
  for (const [code, codeMap] of tables) {
    let arr = [code]
    foodsArr.forEach((item: string) => {
      arr.push((codeMap.get(item) || 0) + '')
    })
    
    ret.push(arr)
  }

  // 按桌号升序排序
  ret = ret.sort((a, b) => {
    return parseInt(a[0]) - parseInt(b[0])
  })
  
  foodsArr.unshift('Table')
  ret.unshift(foodsArr)
  
  return ret
};