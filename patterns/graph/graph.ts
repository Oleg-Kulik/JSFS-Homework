//размерность матрицы
const u : number = 5
//матрица сопряженности
const sopr : number[][] =  [[0,1,1,1,0],
                            [1,0,0,1,0],
                            [1,0,0,1,0],
                            [1,1,1,0,1],
                            [0,0,0,1,0]]
//матрица весов
const weight : number[][] = [[0, 4, 3, 100, Infinity], 
                            [4, 0, Infinity, 5, Infinity], 
                            [3, Infinity, 0, 3, Infinity], 
                            [100, 5, 3, 0, 1], 
                            [Infinity, Infinity, Infinity, 1, 0]]

//////////алгоритм
let dist : number[][] = []
//мнмциализация итоговой матрицы
for (let i = 0; i < u; i++){
    dist.push([])
    for ( let j = 0; j < u; j++){
        dist[i].push(Infinity)
    }
}

console.log(dist)

for (let i = 0; i < u; i++){
    for ( let j = 0; j < u; j++){
        if (sopr[i][j] === 1){
            dist[i][j] = weight[i][j]
        }
    }
}

for (let i = 0; i < u; i++){
    dist[i][i] = 0
}

console.log(dist)

for (let k = 0; k < u; k++){
    for (let i = 0; i < u; i++){
        for ( let j = 0; j < u; j++){
            if (dist[i][j] > dist[i][k] + dist[k][j]){
                dist[i][j] = dist[i][k] + dist[k][j]
            }
        }
    }
}

console.log(dist)