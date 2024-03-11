const arry = [2, 4, 6, 1, 8, 3, 12, 6]
/*
arry.sort(function compare(a, b) {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
})
*/
arry.sort((a,b) =>{return b - a})

console.log(arry)

const arry2 = ["qwe", "qwerty", "as", "a"]

arry2.sort(function compare(a, b) {
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
})

console.log(arry2)
