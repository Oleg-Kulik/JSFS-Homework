//размерность матрицы
var u = 5;
//матрица сопряженности
var sopr = [[0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0]];
//матрица весов
var weight = [[0, 4, 3, 100, Infinity],
    [4, 0, Infinity, 5, Infinity],
    [3, Infinity, 0, 3, Infinity],
    [100, 5, 3, 0, 1],
    [Infinity, Infinity, Infinity, 1, 0]];
//////////алгоритм
var dist = [];
//мнмциализация итоговой матрицы
for (var i = 0; i < u; i++) {
    dist.push([]);
    for (var j = 0; j < u; j++) {
        dist[i].push(Infinity);
    }
}
console.log(dist);
for (var i = 0; i < u; i++) {
    for (var j = 0; j < u; j++) {
        if (sopr[i][j] === 1) {
            dist[i][j] = weight[i][j];
        }
    }
}
for (var i = 0; i < u; i++) {
    dist[i][i] = 0;
}
console.log(dist);
for (var k = 0; k < u; k++) {
    for (var i = 0; i < u; i++) {
        for (var j = 0; j < u; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}
console.log(dist);
//# sourceMappingURL=graph.js.map