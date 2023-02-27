const divide = (matrix:number[][], y:number) => {
    let divide_by = matrix[y][y];
    for (let x = 0; x < 4; x++) {
        matrix[y][x] = matrix[y][x] / divide_by;
        matrix[y][x] = Math.round(matrix[y][x] * 100) / 100;
    }
}

const minus = (matrix:number[][], x:number) => {
    for (let y = 0; y < 3; y++) {
        if (y == x) {
            continue;
        }
        let multiplier = matrix[y][x];
        for (let local_x = 0; local_x < 4; local_x++) {
            matrix[y][local_x] = matrix[y][local_x] - (matrix[x][local_x] * multiplier);
            matrix[y][local_x] = Math.round(matrix[y][local_x] * 100) / 100;
        }
    }
}

const round_to_int = (matrix:number[][]) => {
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++) {
            matrix[y][x] = Number((matrix[y][x]).toFixed(0));
        }
    }
}

export const gauss = (matrix: number[][]):number[][] =>{

    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++) {
            if (x == y) {
                divide(matrix, y);
            }
            if (x == y - 1 || (y == 2 && x == 2)) {
                minus(matrix, x);
            }
        }
    }

    round_to_int(matrix)

    return matrix;
}

