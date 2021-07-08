// 1418. 点菜展示表
export default function displayTable(orders: string[][]): string[][] {
    let ret: string[][] = []
    // 之所以选择使用Set，是因为它的实例不会有重复的元素，可以达到去重的效果
    const foodsSet: Set<string> = new Set(),
          map: Map<string, Map<string, number>> = new Map()

    // 将数组处理成类似于{ tableCode: { foods: foodsCount } }这样的集合
    for (const [person, tableCode, foods] of orders) {
        foodsSet.add(foods)
        const tableMap = map.get(tableCode)
        const mapFoodsCount = tableMap && tableMap.get(foods)
        if (!mapFoodsCount) {
            map.set(
                tableCode,
                tableMap ? tableMap.set(foods, 1) : new Map([[foods, 1]])
            )
        } else {
            tableMap.set(foods, mapFoodsCount + 1)
        }
    }

    const foodsList = [...foodsSet].sort()
    for (const [tableCode, foodsMap] of map) {
        const foodsCountStack = [tableCode]
        for (const foods of foodsList) {
            foodsCountStack.push((foodsMap.get(foods) || 0) + '')
        }
        ret.push(foodsCountStack)
    }
    ret = ret.sort((a, b) => {
        return parseInt(a[0]) - parseInt(b[0])
    })
    foodsList.unshift('Table')
    ret.unshift(foodsList)
    
    return ret
};