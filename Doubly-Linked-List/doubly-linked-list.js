class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            node.next = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head){
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return this;
    }

    unshift(val) {
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null
        }
        this.length--;
        return this;
    }

    insert(index) {
        if(index < 0 || index > this.length){
            return false;
        }
        let node = new node(val);
        if(index === 0){
            return !!this.unshift(node);
        }
        if (index === this.length) {
            return !!this.push(node);
        }
        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }

        let temp = current;
        let prev = temp.prev;
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) {
            return false;
        }
        if(index === 0){
            return !!this.shift();
        }
        if(index === this.length -1){
            return !!this.pop();
        }

        let current = this.head
        let counter = 0;

        while (counter !== index){
            current = current.next;
            counter ++;
        }

        let prev = current.prev;
        let next = current.next;

        this.length --;
        return true;
    }

    print(){
        let arr = [];
        let current = this.head;
        let counter = 0;

        while(counter < this.length){
            arr.push(current.val);
            current = current.next;
            counter ++;
        }
        console.log(arr)

    }

    reverse(){
        if(!this.head) {
            return undefined;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.length){
            next = node.next;
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            counter ++;
        }
        return this;

    }

}

let list = new DoublyLinkedList;
list.push(1);
//list.insert(1, hello)
list.push(2);
list.remove(2);
list.pop();
list.unshift(1);
list.shift();
list.print();
list.reverse();
console.log (list);