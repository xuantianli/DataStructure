/**
 * 栈 后进先出
 */
export class Stack<T> {
    /**定义一个空栈*/
    private readonly stack: T[];

    public constructor() {
        this.stack = new Array<T>();
    }

    /**
     * 入栈
     * @param element 元素
     */
    public push(element: T) {
        this.stack.push(element);
    }

    /**
     * 移除栈顶元素，并返回被移除的元素
     */
    public pop(): T {
        if (this.isEmpty()) { return null };

        return this.stack.pop();
    }

    /**返回栈顶元素，不修改栈*/
    public peek(): T {
        if (this.isEmpty()) { return null };

        return this.stack[this.stack.length - 1];
    }

    /**删除某个栈中元素*/
    public delect(element: T) {
        if (this.isEmpty()) { console.error(`空栈！！！`); return };

        const _index: number = this.stack.indexOf(element);
        if (_index > -1) {
            this.stack.splice(_index, 1);
        }
    }

    /**将栈转化成字符串*/
    public toString(): string { return this.stack.join(' '); }

    /**检测栈里元素的个数*/
    public size(): number { return this.stack.length; }

    /**检测是否是空栈*/
    public isEmpty(): boolean { return this.stack.length === 0; }

}