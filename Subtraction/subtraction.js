const linked1 = require('C:/Users/user/OneDrive/Desktop/LinkedList/Subtraction/Linked1.js');
const linked2 = require('C:/Users/user/OneDrive/Desktop/LinkedList/Subtraction/Linked2.js');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SubtractionOfNumbers {
    constructor() {
        this.head = null;
        this.borrow = 0;
    }

    subtraction(list1, list2) {
        
        let current1 = list1.linkedList;
        let current2 = list2.linkedList;
        //console.log(current1);
        //console.log(current2);

        let arr1 = [];
        let arr2 = [];
        let data1;
        let data2;

        while (current1 !== null || current2 !== null) {

            data1 = current1 ? current1.data : 0;
            data2 = current2 ? current2.data : 0;

            //console.log(data1)
            //console.log(data2)

            arr1.push(data1)
            
            arr2.push(data2)

            if (current1 !== null) current1 = current1.next;
            if (current2 !== null) current2 = current2.next;
        }
        //console.log(arr1);
        //console.log(arr2);

        let maxArr;

            if (arr1.length > arr2.length) {
                maxArr = arr1;
            }
            else {
                maxArr = arr2;
            }
        
            let sub;
            let unitNum = [];

            for (let i=0; i < maxArr.length; i++) {
                //console.log(arr1)
                sub = arr1[arr1.length-i-1] - arr2[arr2.length-i-1] - this.borrow;
                //console.log('sub', sub)
                
                if (sub < 0) {
                    sub += 10;
                    this.borrow = 1;
                }
                else {
                    this.borrow = 0;
                }
                unitNum.push(sub);
            }

            //console.log(unitNum);

            for (let i=0; i<unitNum.length; i++) {
                let newNode = new Node(unitNum[i]);

                if (!this.head){
                    this.head = newNode
                }
    
                else{
                    let lastNode = this.head;
                    while(lastNode.next){
                        lastNode = lastNode.next
                    }
                    lastNode.next = newNode
                }
    
            }
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }


    display(){
        return this.head
    
    }


}

const subtractionOfNumbers = new SubtractionOfNumbers(linked1, linked2);
subtractionOfNumbers.subtraction(linked1, linked2);
subtractionOfNumbers.print();
