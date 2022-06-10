/*

1->2->3->4->5->6->7->8->null

given m=2, n=5 return

1->5->4->3->2->6->7->8->null

approach 

In all linkedlist problems, we only get head to work on, so it is important to store all the needed information

store : m-1, m,n,n+1, tail of new linkedlist

start position

newListnow = null;

while position <=n

if(position = m-1){
    store before linkedlist
}


next = current.next;
current.next= list;
list = current;
current = current.next;

if(position = n){
    store after linked list
    store as tail
}


before linkedlist -->next = linked as of now

tail of new linkedlist -->next = after linked list

*/
