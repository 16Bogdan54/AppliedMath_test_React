import {useState} from 'react';

type Matrix = string[][];

interface Props {
  rows: number;
  cols: number;
}

function Matrix({ rows, cols }: Props) {
  const [matrix, setMatrix] = useState<Matrix>(
    Array.from({ length: rows }, () => Array(cols).fill(''))
  );

  function updateMatrix(row: number, col: number, value: string) {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  }

  function renderCell(row: number, col: number) {
    return (
      <input
        type="text"
        value={matrix[row][col]}
        onChange={(e) => updateMatrix(row, col, e.target.value)}
      />
    );
  }

  return (
    <table>
      <tbody>
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td key={colIndex}>{renderCell(rowIndex, colIndex)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Matrix;