import {useState} from 'react';
import style from "../../styles/matrix.module.css";
import React from "react";

type Props = {
    size: number
}

const X0_input = ({size}:Props) => {
    const [array, setArray] = useState<number[]>(
        Array(size).fill('')
    )

    const updateArray = (pos: number, value: number) => {
        const newArray = [...array];
        newArray[pos] = value
        setArray(newArray);
    }

    const renderInputCell = (pos: number) => {
        return (
            <input
                className={style.matrix_cell}
                type="text"
                value={array[pos]}
                onChange={(e) => updateArray(pos, Number.parseFloat(e.target.value))}
            />
        )
    }

    return (
        <div className='p-2 px-4'>
            <table className={style.matrix_table}>
                <tbody>
                    <tr>
                        {array.map((item, index) => (
                            <td className={style.matrix_td} key={index}>
                                renderInputCell(item)
                            </td>
                        ))}
                    </tr>
               </tbody>
            </table>
        </div>
    );
};

export default X0_input;
