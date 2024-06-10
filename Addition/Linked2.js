class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const node = new Node(data);
        // console.log(node)

        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let lastNode = this.head;

            while(lastNode.next !== null) {
                lastNode = lastNode.next
            }
            lastNode.next = node;
        }
    }

    print() {

        if (this.isEmpty()) {
            return 'List is Empty'
        }
        else {
            let curr = this.head;
            while (curr) {
                console.log(curr)
                curr = curr.next;
            }
        }
    }

    display() {
        return this.head;
    }
}

let linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(3);
linkedList.append(5);
linkedList.append(7);
linkedList.append(9);

//console.log(list2.print())

// console.log(list2.display())

exports.linkedList = linkedList.display()