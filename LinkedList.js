class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(HEAD = null, length = 0) {
        this.HEAD = HEAD;
        this.length = length;
    }
    append(value) {
        let newNode = new Node(value);
        this.length++;
        if(this.HEAD === null) {
            this.HEAD = newNode;
        } else {
            let pointer = this.HEAD;
            while(pointer.nextNode) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = newNode;
        }
    }
    prepend(value) {
        let newNode = new Node(value);
        this.length++;
        newNode.nextNode = this.HEAD;
        this.HEAD = newNode;
    }
    size() {
        return(this.length);
    }
    head() {
        return this.at(0);
    }
    tail() {
        return this.at(this.size());
    }
    at(index) {
        let pointer = this.HEAD;
        for(let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }
    pop() {
        if(this.HEAD.nextNode === null) {
            this.HEAD = null;
        }
        this.at(this.size() - 2).nextNode = null;
        this.length--;
    }
    contains(value) {
        let pointer = this.HEAD;
        while(pointer.nextNode !== null) {
            if(pointer.value === value) {
                return true;
            }
            pointer = pointer.nextNode;
        }
        return pointer.value === value ? true : false;
    }
    find(value) {
        let count = 0;
        let pointer = this.HEAD;
        while(pointer !== null) {
            if(pointer.value === value) {
                return count;
            }
            count++;
            pointer = pointer.nextNode;
        }
        return -1;
    }
    toString() {
        let pointer = this.HEAD;
        let element = "";
        while(pointer) {
            element += pointer.value + " ";
            pointer = pointer.nextNode;
        }
        return element;
    }
    isEmpty() {
        return this.length === 0;
    }
}
let list = new LinkedList();

console.log(list.isEmpty());

let n1 = list.append("hi");
let n2 = list.append("how");
let n3 = list.append("are");
let n4 = list.append("you");
let n5 = list.prepend("what");
let n6 = list.prepend("what");
let n7 = list.prepend("what");
let n8 = list.prepend("what");
let n9= list.prepend("wow");

console.log(list.isEmpty());
console.log(list.size());
console.log(list.find("hi"));
console.log(list.toString());
console.log(list.at(2));
console.log(list.head());
console.log(list.tail());
list.pop();
console.log(list.toString());
console.log(list.contains("what"));