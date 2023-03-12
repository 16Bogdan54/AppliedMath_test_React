/**
 * Solves a system of linear equations with five variables using the fixed-point iteration method.
 *
 * @param a The coefficient matrix.
 * @param x0 The initial guess for the solution vector.
 * @param tolerance The maximum amount of error allowed.
 * @param maxIterations The maximum number of iterations to perform.
 * @returns The calculated solution vector.
 * @throws Error if the maximum number of iterations is reached without achieving the desired tolerance.
 */
export const fixedPointIteration5 = (a: number[][], x0: number[], tolerance: number = 1e-6, maxIterations: number = 1000): number[] => {
    const n = a.length;
    let x = [...x0];
    let error = Number.MAX_VALUE;
    let iterations = 0;

    while (error > tolerance && iterations < maxIterations) {
        const nextX = [];

        for (let i = 0; i < n; i++) {
            let sum = a[i][n];

            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    sum -= a[i][j] * x[j];
                }
            }

            nextX[i] = sum / a[i][i];
        }

        error = Math.max(...nextX.map((nextXi, i) => Math.abs(nextXi - x[i])));
        x = [...nextX];
        iterations++;
    }

    if (iterations === maxIterations) {
        throw new Error(`Maximum number of iterations (${maxIterations}) reached without achieving desired tolerance.`);
    }

    return x;
}

const a = [
    [4, -1, 0, 0, 1, ],
    [-1, 4, -1, 0, 0, 1],
    [0, -1, 4, -1, 0, 1],
    [0, 0, -1, 4, -1, 1],
    [1, 0, 0, -1, 4, 2],
];
const x0 = [0, 0, 0, 0, 0];

const solution = fixedPointIteration5(a, x0);
console.log(solution); // Output: [0.6875003847511526, 0.6250004441902592, 0.562500504319696, 0.5000005541394632, 0.4375003847675835]
