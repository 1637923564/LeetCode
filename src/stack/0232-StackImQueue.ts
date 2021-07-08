// 232. 用栈实现队列
export default class StackImQueue {
    private inStack: number[]
    private outStack: number[]
    constructor() {
        this.inStack = []
        this.outStack = []
    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        if (!this.outStack.length) {
            this.toOut()
        }
        return this.outStack.pop()
    }

    peek(): number {
        if (!this.outStack.length) {
            this.toOut()
        }
        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        return this.outStack.length === 0 && this.inStack.length === 0
    }
    private toOut() {
        // 你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。
        while(this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
    }
}
