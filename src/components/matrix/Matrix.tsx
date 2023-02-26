import {useState} from 'react';
import { gauss } from '../../functions/gauss';

// type Matrix = string[][];

interface Props {
  rows: number;
  cols: number;
}

function Matrix({ rows, cols }: Props) {
  const [solution, setSolution] = useState<number[]>([])
  const [matrix, setMatrix] = useState<number[][]>(
    Array.from({ length: rows }, () => Array(cols).fill(''))
  );
  
    const submit = () => {
      setSolution(gauss(matrix))
    }

  function updateMatrix(row: number, col: number, value: string) {
    const newMatrix = [...matrix];
    newMatrix[row][col] = Number.parseFloat(value)
    setMatrix(newMatrix);
  }

  function renderCell(row: number, col: number) {
    return (
      <input
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        type="text"
        value={matrix[row][col]}
        onChange={(e) => updateMatrix(row, col, e.target.value)}
      />
    );
  }

  return (
    <div>
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
    <button onClick={submit} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
    <span>Sololution:{solution.map((number) => (
      <span className='mx-2'>{number}</span>
    ))}</span>
    </div>
  );
}

export default Matrix;