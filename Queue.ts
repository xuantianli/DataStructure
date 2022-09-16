/**
 * 队列（先进先出）
 */
export class Queue<T> {
    /**定义空队列*/
    private readonly queen: Array<T>;

    public constructor() {
        this.queen = new Array<T>();
    }

    /**入队*/
    public enqueue(item: T) { this.queen.push(item); }

    /**出队,从队列中删除头部元素，返回删除的那个元素*/
    public dequeue(): T { return this.queen.shift(); }

    /**获取队列头部元素*/
    public front(): T {
        if (this.isEmpty()) { return null };
        return this.queen[0];
    }

    /**删除队伍中的元素*/
    public delete(item: T) {
        if (this.isEmpty()) { return; }

        const _index = this.queen.indexOf(item);
        if (_index > -1) { this.queen.splice(_index, 1) };
    }

    /**查看是否是空队列*/
    public isEmpty(): boolean { return this.queen.length === 0 };

    /**查看队列元素个数*/
    public size(): number { return this.queen.length };

    /**队列转换成字符串*/
    public toString(): string { return `队投：---${this.queen.join(' ')}---队尾` }





}