import {useState} from 'react';
import { gauss } from '../../functions/gauss';

import style from '../../styles/matrix.module.css'

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

  const updateMatrix = (row: number, col: number, value: number) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value
    setMatrix(newMatrix);
  }

  const renderCell = (row: number, col: number) => {
    return (
      <input
        className={style.matrix_cell}
        type="text"
        value={matrix[row][col]}
        onChange={(e) => updateMatrix(row, col, Number.parseFloat(e.target.value))}
      />
    );
  }

  return (
    <div className='p-2 px-4'>
      <table className={style.matrix_table}>
        <tbody>
          {matrix.map((row, rowIndex) => (
          <tr className={style.matrix_tr} key={rowIndex}>
            {row.map((col, colIndex) => (
              <td className={style.matrix_td} key={colIndex}>{renderCell(rowIndex, colIndex)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={submit} type="button" className={style.submit_btn}>Submit</button>
    <p>Solution:{solution.map((number, index) => (
      <span className='mx-2' key={index}>{number}</span>
    ))}</p>
    </div>
  );
}

export default Matrix;