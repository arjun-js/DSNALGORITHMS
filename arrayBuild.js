class NewArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }
    shiftItems(index){
        for(let i = index; i< this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        this.pop();
    }
}

const newArray = new NewArray();

newArray.push('Hello');
newArray.push('!');
newArray.push('Hello');
newArray.push('Hello');
newArray.push('Hellos');
newArray.delete(1);

console.log(newArray);