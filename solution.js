/*

Reverse a linkedlist 

1->2->3->4->null

4->3->2->1->null

approach : 

prev=null;

loop current

next = current.next;
current.next = prev;
prev=current;
current = next;


return prev;
*/


function reverseLinkedList(){

}

console.log(reverseLinkedList())