// 255. 用队列实现栈
export default class QueueImStack {
    private inQueue: number[]
    private storeQueue: number[]
    constructor() {
        this.inQueue = []
        this.storeQueue = []
    }

    push(x: number): void {
        this.inQueue.push(x)
    }

    pop(): number {
        if (!this.inQueue.length) {
            this.inQueue = [...this.storeQueue]
            this.storeQueue = []
        }
        while(this.inQueue.length > 1) {
            this.storeQueue.push(this.inQueue.shift())
        }

        return this.inQueue.shift()
    }

    top(): number {
        const inQueue = this.inQueue
        const storeQueue = this.storeQueue
        return inQueue[inQueue.length - 1] || storeQueue[storeQueue.length - 1] || undefined
    }

    empty(): boolean {
        return this.top() === undefined
    }
}
