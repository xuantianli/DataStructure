/**节点*/
export class Node<T> {
    /**存储元素的数据域(内存空间)*/
    public data: T;
    /**指向下一个节点地址的指针域*/
    public next: Node<T>;
    public constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**定义指针位置类型*/
type position = number;

/**单链表*/
export class LinkedList<T> {
    /**头节点*/
    public head: Node<T>;
    /**链表长度*/
    public length: number;
    public constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * 往链表的末尾添加数据
     * @param data 添加的数据
     */
    public append(data: T): Node<T> {
        const _newNode: Node<T> = new Node(data);

        if (this.head == null) { this.head = _newNode }
        else { let _current = this.head; while (_current.next) { _current = _current.next }; _current.next = _newNode };

        this.length += 0x01;
        return _newNode;
    }

    /**批量往链表的末尾添加数据*/
    public appendList(...res: T[]) {
        res.some(data => this.append(data));
    }

    /**
     * 在指定位置插入节点
     * @param position 指定位置
     * @param data 插图数据
     */
    public insert(position: position, data: T): boolean {

        if (position < 0 || position > this.length) { return false; }

        const _newNode = new Node(data);

        if (position === 0) {
            _newNode.next = this.head;
            this.head = _newNode;
        } else {
            let _index: number = 0;
            let _current = this.head;
            let _prev = null;

            while (_index < position) {
                _prev = _current;
                _current = _current.next;
                _index += 0x01;
            }

            _prev.next = _newNode;
            _newNode.next = _current;
        }
        this.length++;
        return true;
    }

    /**
     * 获取指定位置的节点数据
     * @param position 指定位置
     * @returns 
     */
    public getNode(position: position): T {
        if (position < 0 || position > this.length) { return null; }

        let _current = this.head;
        let _index = 0;
        while (_index < position) {
            _current = _current.next;
            _index += 0x01;
        }
        return _current.data;
    }

    /**获取指定节点数据的下标*/
    public index(data: T): number {
        let _index = 0;
        let _current = this.head;
        while (_current) {
            if (data == _current.data) {
                return _index;
            }
            _index += 0x01;
            _current = _current.next;
        }
        return -1;
    }

    /**
     * 替换指定位置的节点数据
     * @param position 指定位置
     * @param data 节点数据
     */
    public change(position: position, data: T): boolean | Node<T> {

        if (position < 0 || position > this.length) { return false; }

        let _index = 0;
        let _current = this.head;
        while (_index < position) {
            _index++;
            _current = _current.next;
        }
        _current.data = data;
        return _current;
    }

    /**
     * 删除指定位置节点并返回它
     * @param position 指定位置
     * @returns 
     */
    public removeAt(position: position): boolean | Node<T> {

        if (position < 0 || position > this.length) { return false; }

        let _index = 0;
        let _current = this.head;
        let _prev = null;

        if (position === 0) {
            this.head = _current.next;
        } else {
            while (_index < position) {
                _index += 0x01;
                _prev = _current;
                _current = _current.next;
            }
            _prev.new = _current.next;
        }
        this.length -= 0x01;
        return _current;

    }

    /**
     * 删除指点节点数据并返回它
     * @param data 节点数据
     */
    public remove(data: T): boolean | Node<T> {
        const _index = this.index(data);
        return this.removeAt(_index);
    }

    /**检测是否是空链表*/
    public isEmpty(): boolean { return this.length === 0; }

    /**链表元素个数*/
    public size(): number { return this.length; }

    /**链表转字符串*/
    public toString(): string {
        let _linkedListString = `链表长度为: ${this.length}，链表数据为：`;

        let _current = this.head;
        while (_current) {
            if (_current.next === null) {
                _linkedListString += _current.data;
            } else {
                _linkedListString += `${_current.data} -->`;
            }
            _current = _current.next;
        }

        return _linkedListString;
    }





}