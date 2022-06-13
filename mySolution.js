/*
Implement queues using stacks

enqueue : insert in to stack as insertion is same for stacks and queues

dequeue: remove first element : 

as we are implementing it using stacks, first create a new stack and push the pop elements in to new stack

to make the second stack a reversal and pop the element 

peek : same as above, but instead of pop, just return the last element

empty : check if both the stacks are empty and return 0 if true

*/


class Queue{
    constructor(){
        this.in =[];
        this.out=[];
    }

    enqueue(val){
        this.in.push(val);
    }
    dequeue(){
        while(this.in.length){
            this.out.push(this.in.pop());
        }
        this.in.pop();
     }

     peek(){
         while(this.in.length){
             this.out.push(this.in.pop());
         }
         return this.out[this.out.length-1];
     }

     empty(){
         this.in.length ==0 && this.out.length == 0;
     }


}