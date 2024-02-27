class node {
    key: number
    value: number | string
    left: node | null
    right: node | null
    constructor(key: number, value: number | string) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
    }
}
class tree {
    root: node
    high: number
    parentNode: node
    constructor(key: number, value: number | string) {
        this.root = new node(key, value)
        this.high = 1
        this.parentNode = this.root
    }
    //определение максимального значения
    getMax(node: node): node {
        if (node == null) return this.root
        if (node.right == null) return node
        return this.getMax(node.right)
    }
    //поиск узла
    findNode(key: number) {
        let currentNode = this.root
        while (currentNode.key != key) {
            if (key < currentNode.key) {
                if(currentNode.left != null){
                    currentNode = currentNode.left
                }
                else return null
            }
            if (key > currentNode.key) {
                if(currentNode.right != null){
                    currentNode = currentNode.right
                }
                else return null
            }
        }
        return currentNode
    }
    //поиск значения
    find(key: number) {
        let foundNode = this.findNode(key)
        if (foundNode != null){
            return foundNode.value
        }
        else return null
    }
    //вставка
    insert(key: number, value: number | string) {
        let parentNode = this.root
        let newNode = new node(key, value)
        while (parentNode != newNode) {
            if (newNode.key < parentNode.key) {
                if (parentNode.left == null) {
                    parentNode.left = newNode
                    parentNode = newNode
                }
                else {
                    parentNode = parentNode.left
                }
            }
            else if (newNode.key >= parentNode.key) {
                if (parentNode.right == null) {
                    parentNode.right = newNode
                    parentNode = newNode
                }
                else {
                    parentNode = parentNode.right
                }
            }
        }
    }
    //
    /*
    deleteRecursion(node: node, key: number) {
        if (node == null) return null
        else if (key < node.key && node.left != null) node.left = this.deleteRecursion(node.left, key)
        else if (key > node.key && node.right != null) node.right = this.deleteRecursion(node.right, key)
        else {
            if (node.left == null || node.right == null) {
                if (node.left == null && node.right != null) node = node.right
                if (node.right == null && node.left != null) node = node.left
            }
            else {
                let maxLeft = this.getMax(node.left)
                node.key = maxLeft.key
                node.value = maxLeft.value
                node.left = this.deleteRecursion(node.left, maxLeft.key)
            }
        }
        return node;
    }
    //удаление
    
    delete(key: number) {
        this.deleteRecursion(this.root, key) != null ? this.root : null
    }
    /*
    //определение высоты дерева (поддерева) по ключу
    height(node: node): number {
        // Если дерево пусто, то его высота равна нулю
        if (!node) {
            return 0;
        }
        // Иначе высота равна единице плюс максимальная высота из высот левого и правого поддеревьев
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }*/
    //изменение элемента
    change(key: number, value: number | string) {
        let foundNode = this.findNode(key)
        if (foundNode != null){
            foundNode.value = value
        }
    }
}

//создание дерева
console.log("создание дерева")
let ftree = new tree(5, "a")
console.log(ftree.findNode(5))

//добавление элементов
console.log("добавление элементов")
ftree.insert(2, "b")
ftree.insert(10, "d")
ftree.insert(6, "f")
ftree.insert(1, "c")
ftree.insert(12, "g")
console.log(ftree.root)
console.log(ftree.root)

//поиск элемента
console.log("поиск элемента")
console.log(ftree.findNode(10))

//поиск значения
console.log("поиск значения")
console.log(ftree.find(10))

//удаление
console.log("удаление")
//ftree.delete(12)
console.log(ftree.root)

//определение высоты
console.log("определение высоты")
//console.log(ftree.height(ftree.root))
//console.log(ftree.height(ftree.findNode(10)))

//изменение элемента
console.log("изменение элемента")
ftree.change(10, "abc")
console.log(ftree.root)
