import React from "react";


let creditsList = movements.filter(item => item.amount < 0);

export default function Debits () {
    let debitsList = movements.filter(item => item.amount > 0);
    return (
        <>
            
        </>
    )
}