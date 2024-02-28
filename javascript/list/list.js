class node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class doubleLinkedList {
    constructor(value){
        this.head = new node(value)
        this.tail = this.head
        this.length = 1
    }
    //вставка в конец
    push_back(value){
        const newNode = new node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    //вставка в начало
    push_front(value){
        const newNode = new node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }
    //размер списка
    size(){
        return this.length
    }
    //удаление первого элемента
    pop_front(){
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
    }
    //удаление последнего элемента
    pop_back(){
        this.head = this.head.next
        this.head.prev = null
        this.length--
    }
    //замена значения элемента
    change(index, value){
        let iter = this.head
        for(let i = 0; i < index; i++, iter = iter.next){}
        iter.value = value
    }
    //возврат значения (поиск) элемента
    get(index){
        let iter = this.head
        for(let i = 0; i < index; i++, iter = iter.next){}
        return iter.value
    }
}

let fList = new doubleLinkedList(1)

fList.push_back(2)
fList.push_back(3)
fList.push_back(4)
console.log("push_back is working! size = " + fList.size())
fList.push_front(8)
fList.push_front(9)
console.log("push_front is working! size = " + fList.size())
fList.pop_back()
fList.pop_back()
console.log("pop_back is working! size = " + fList.size())
fList.pop_front()
console.log("pop_front is working! size = " + fList.size())
console.log("size is working! size = " + fList.size())
console.log("get is working! value = " + fList.get(1))
fList.change(1, 18)
console.log("change is working! value = " + fList.get(1))


