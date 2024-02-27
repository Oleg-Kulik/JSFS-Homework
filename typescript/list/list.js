"use strict";
var node = /** @class */ (function () {
    function node(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return node;
}());
var doubleLinkedList = /** @class */ (function () {
    function doubleLinkedList(value) {
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1;
    }
    //вставка в конец
    doubleLinkedList.prototype.push_back = function (value) {
        var newNode = new node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    //вставка в начало
    doubleLinkedList.prototype.push_front = function (value) {
        var newNode = new node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    };
    //размер списка
    doubleLinkedList.prototype.size = function () {
        return this.length;
    };
    //удаление первого элемента
    doubleLinkedList.prototype.pop_front = function () {
        if (this.tail.prev != null) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
    };
    //удаление последнего элемента
    doubleLinkedList.prototype.pop_back = function () {
        if (this.head.next != null) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }
    };
    //замена значения элемента
    doubleLinkedList.prototype.change = function (index, value) {
        var iter = this.head;
        for (var i = 0; i < index; i++) {
            if (iter.next != null) {
                iter = iter.next;
            }
        }
        iter.value = value;
    };
    //возврат значения (поиск) элемента
    doubleLinkedList.prototype.get = function (index) {
        var iter = this.head;
        for (var i = 0; i < index; i++) {
            if (iter.next != null) {
                iter = iter.next;
            }
        }
        return iter.value;
    };
    return doubleLinkedList;
}());
var fList = new doubleLinkedList(1);
fList.push_back(2);
fList.push_back(3);
fList.push_back(4);
console.log("push_back is working! size = " + fList.size());
fList.push_front(8);
fList.push_front(9);
console.log("push_front is working! size = " + fList.size());
fList.pop_back();
fList.pop_back();
console.log("pop_back is working! size = " + fList.size());
fList.pop_front();
console.log("pop_front is working! size = " + fList.size());
console.log("size is working! size = " + fList.size());
console.log("get is working! value = " + fList.get(1));
fList.change(1, 18);
console.log("change is working! value = " + fList.get(1));
console.log(fList);
//# sourceMappingURL=list.js.map