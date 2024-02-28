class node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
    }
}
class tree {
    constructor(key, value) {
        this.root = new node(key, value)
        this.high = 1
        this.parentNode = this.root
    }
    //определение максимального значения
    getMax(node) {
        if (node == null) return null
        if (node.right == null) return node
        return this.getMax(node.right)
    }
    //поиск узла
    findNode(key) {
        let currentNode = this.root
        while (currentNode.key != key) {
            if (key < currentNode.key) {
                currentNode = currentNode.left
            }
            if (key > currentNode.key) {
                currentNode = currentNode.right
            }
        }
        return currentNode
    }
    //поиск значения
    find(key) {
        let currentNode = this.findNode(key)
        return currentNode.value
    }
    //вставка
    insert(key, value) {
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
    deleteRecursion(node, key) {
        if (node == null) return null
        else if (key < node.key) node.left = this.deleteRecursion(node.left, key)
        else if (key > node.key) node.right = this.deleteRecursion(node.right, key)
        else {
            if (node.left == null || node.right == null) {
                if (node.left == null) node = node.right
                else node = node.left
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
    delete(key) {
        this.root = this.deleteRecursion(this.root, key)
    }
    //определение высоты дерева (поддерева) по ключу
    height(node) {
        // Если дерево пусто, то его высота равна нулю
        if (!node) {
            return 0;
        }
        // Иначе высота равна единице плюс максимальная высота из высот левого и правого поддеревьев
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    //изменение элемента
    change(key, value) {
        this.findNode(key).value = value
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
ftree.delete(12)
console.log(ftree.root)

//определение высоты
console.log("определение высоты")
console.log(ftree.height(ftree.root))
console.log(ftree.height(ftree.findNode(10)))

//изменение элемента
console.log("изменение элемента")
ftree.change(10, "abc")
console.log(ftree.root)
