import {useState} from 'react';
import { gauss } from '../../functions/gauss';

// type Matrix = string[][];

interface Props {
  rows: number;
  cols: number;
}

const Matrix = ({ rows, cols }: Props) => {
  const [solution, setSolution] = useState<number[]>([])
  const [matrix, setMatrix] = useState<number[][]>(
    Array.from({ length: rows }, () => Array(cols).fill(''))
  );
  
  const submit = () => {
    setSolution(gauss(matrix))
  }

  const updateMatrix = (row: number, col: number, value: string) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = Number.parseInt(value)
    setMatrix(newMatrix);
  }

  const renderCell = (row: number, col: number) => {
    return (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={matrix[row][col]}
        onChange={(e) => updateMatrix(row, col, e.target.value)}
      />
    );
  }

  return (
    <div className='p-4 mt-12'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4'>
        <tbody>
          {matrix.map((row, rowIndex) => (
          <tr className='border-b border-gray-200 dark:border-gray-700' key={rowIndex}>
            {row.map((col, colIndex) => (
              <td className='px-6 py-4 bg-gray-50 dark:bg-gray-800' key={colIndex}>{renderCell(rowIndex, colIndex)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={submit} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
    <p>Sololution:{solution.map((number, index) => (
      <span className='mx-2' key={index}>{number}</span>
    ))}</p>
    </div>
  );
}

export default Matrix;