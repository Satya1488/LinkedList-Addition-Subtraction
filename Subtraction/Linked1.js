
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        let node = new Node(data);
        // console.log(node);
        if (this.isEmpty()){
            this.head = node;
        }
        else{
            let lastNode = this.head;
            while(lastNode.next !== null){
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        
    }

    reverse() {

        let curr = this.head;
        let prev = null;

        while(curr.next !== null) {

            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        curr.next = prev;
        this.head = curr;
    }

    display(){
       return this.head;
    }

    print (){
        let currentNode = this.head;
        let arr = [];
        while(currentNode !== null){
            arr.push(currentNode.data)
            //console.log(currentNode.data);
            
            currentNode = currentNode.next
        }
        //console.log(arr)
    }

    isEmpty(){
        return this.head === null
    }
}


const linkedList = new LinkedList()
linkedList.append(2);
linkedList.append(4);
linkedList.append(6);
linkedList.append(8);
//linkedList.append(3);


linkedList.print();

//console.log(linkedList.display())

// Export the linked list head
exports.linkedList = linkedList.display();
