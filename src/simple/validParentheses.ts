// 20. 有效的括号
export default function validParentheses(s: string): boolean {
  if (s.length % 2) return false
  const stack = [] // 用于存放左括号：( [ {
  const map = new Map([[']', '['], [')', '('], ['}', '{']])

  const sArr = s.split('')
  const len = sArr.length
  
  for (let i = 0; i < len; i++) {
    const sItem = sArr[i]
    const val = map.get(sItem)
    
    if (!val) {
      // map 中没有的 key 是左括号，应该入栈
      stack.push(sItem)
    } else {
      // map 中有的 key 是右括号，应该出栈
      // 由于括号是成对存在的，所以当前应该出栈的括号应该和val相等，否则直接返回false
      if (stack.pop() !== val) {
        return false
      }
    }
  }

  return stack.length === 0
};