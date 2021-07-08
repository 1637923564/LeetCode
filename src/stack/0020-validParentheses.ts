// 20. 有效的括号
export default function validParentheses(s: string): boolean {
    if (s.length % 2 !== 0) return false
    const stack: string[] = [] // 用于存放左括号：( [ {
    const map: Map<string, string> = new Map([
        [']', '['],
        [')', '('],
        ['}', '{']
    ])

    const sArr = s.split('')
    for (const item of sArr) {
        const mapValue = map.get(item)
        if (!mapValue) {
            stack.push(item)
        } else if (mapValue !== stack.pop()) {
            return false
        }
    }

    return stack.length === 0
}