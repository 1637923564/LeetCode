// 1711. 大餐计数
export default function countPairs(deliciousness: number[]): number {
  let ret = 0;
  const map: Map<number, number> = new Map();
  // 数组中的值不可能大于 maxSum
  const maxSum = Math.max(...deliciousness) * 2;

  deliciousness.forEach((item) => {
    /**
     * 下面这个循环用于匹配map中能与item组合成大餐的值
     * i 是 2 的幂，所以 i - item 得到的值就可以与 item 组成大餐
     */
    for (let i = 1; i <= maxSum; i *= 2) {
      // 获取能与item组合成大餐的数量
      const count = map.get(i - item);
      ret += count || 0;
    }
    let count = map.get(item);
    map.set(item, count ? ++count : 1);
  });

  return ret % 1000000007;
}











// const ret = countPairs([1,1,2,4,2,1])
/**
 * 0 -> 1: 1
 * 1 -> 1: 2
 * 1 -> 1: 2, 2: 1
 * 1 -> 1: 2, 2: 1, 4: 1
 * 2 -> 1: 2, 2: 2, 4: 1
 * 4 -> 1: 3, 2: 2, 4: 1
 */
