
const linked1 = require("C:/Users/user/OneDrive/Desktop/LinkedList/Addition/Linked1.js");
 //console.log(linked1);

const linked2 = require("C:/Users/user/OneDrive/Desktop/LinkedList/Addition/Linked2.js");
// console.log(linked2);


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class AddTwoLinkedLists{
    constructor(){
        this.head = null;
        this.carry = 0;
    }

    addNumbers(list1, list2){
        let current1 = list1.linkedList
        let current2 = list2.linkedList

        let arr1 = [];
        let arr2 = [];
        let data1;
        let data2;
        while (current1 !== null || current2 !== null || this.carry > 0){
            //console.log(current1)

            data1 = current1 ? current1.data : 0 
            data2 = current2 ? current2.data : 0
            //console.log(data1)
            //console.log(data2)

            arr1.push(data1)
            
            arr2.push(data2)
            

            if (current1 !== null) current1 = current1.next;
            if (current2 !== null) current2 = current2.next;
        }   


            let sum;
            let unitNum = [];
            //console.log(data)
            //console.log(arr1)
            //console.log(arr2)
            
            let maxArr;

            if (arr1.length > arr2.length) {
                maxArr = arr1;
            }
            else {
                maxArr = arr2;
            }


            for (let i=0; i < maxArr.length; i++) {
                sum = arr1[arr1.length-i-1] + arr2[arr2.length-i-1] + this.carry;
                //console.log(sum)
                unitNum.push(sum % 10)
                //console.log('unitnum', unitNum)
                this.carry = Math.floor(sum/10);
                //console.log('carry', this.carry)
                //console.log(sum)
            }

            // console.log(unitNum)
                      
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

const sumOfNumbers = new AddTwoLinkedLists(linked1, linked2);
sumOfNumbers.addNumbers(linked1, linked2)
// console.log(addTwoNumbers.display());
sumOfNumbers.print()



/*
Output:

2 -> 4 -> 6 -> 8 -> 3  =  24683
1 -> 3 -> 5 -> 7 -> 9  =  13579
---------------------
3 -> 8 -> 2 -> 6 -> 2  =  26283

*/