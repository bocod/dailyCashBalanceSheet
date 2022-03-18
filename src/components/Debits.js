import React from "react";


export default function Debits (movements) {
    let creditsList = movements.filter(item => item.amount < 0);
    let debitsList = movements.filter(item => item.amount > 0);
    return (
        <>
            <div>{creditsList}</div>
            <div>{debitsList}</div>
        </>
    )
}