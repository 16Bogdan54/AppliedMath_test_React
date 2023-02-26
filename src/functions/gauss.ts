export const gauss = (matrix: number[][]):number[] =>{
    // Copy the matrix to avoid modifying the original
    matrix = matrix.slice();
  
    const rows = matrix.length;
    const columns = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      // Find the row with the largest absolute value in the i-th column
      let maxRow = i;

      for (let j = i + 1; j < rows; j++) {
        if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
          maxRow = j;
        }
      }
  
      // Swap the rows if necessary
      if (maxRow !== i) {
        [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
      }
  
      // Eliminate the i-th column in the remaining rows
      for (let j = i + 1; j < rows; j++) {
        const factor = matrix[j][i] / matrix[i][i];
        for (let k = i; k < columns; k++) {
          matrix[j][k] -= factor * matrix[i][k];
        }
      }
    }
  
    // Back-substitute to find the solution
    const solution = new Array(rows).fill(0);

    for (let i = rows - 1; i >= 0; i--) {
      let sum = 0;
      for (let j = i + 1; j < columns - 1; j++) {
        sum += matrix[i][j] * solution[j];
      }
      solution[i] = (matrix[i][columns - 1] - sum) / matrix[i][i];
    }
  
    return solution.map((num) => (Math.round(num * 100) / 100));
  }