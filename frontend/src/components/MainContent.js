import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from 'uuid';
import '../css/MainContent.css';

const KEY = 'bocod.AccountApp';

function MainContent() {



    let newMovement = useRef();
    let newConcept  = useRef();

    const [ movements, setMovement ] = useState([]);

    //Search if it is any previous data stored in localStorage 
    useEffect( () => {
            const storeMovements = JSON.parse(localStorage.getItem(KEY))
            if (storeMovements) {
                setMovement(storeMovements);
            }
        }, []
    )

    //Store data in localStorage
    useEffect( () => {
            localStorage.setItem(KEY, JSON.stringify(movements))
        }, [movements]
    )

    let errorValidation = (msg) => {
        return (
            <p>{msg}</p>
        )
    };

    // When an amount is entered, first check if the key is 'Enter', then check if the value is not empty, !empty the state is updated
    const handleAmount = (e) => {
        let currentAmount = Number(newMovement.current.value);
        let currentConcept = newConcept.current.value;
        if (e.key !== 'Enter') return
        if ( e.key === 'Enter' ) {
            if ( currentAmount === '' || currentAmount === 0 ) {
                const amountError = document.querySelector('#amountError');
                let errorMsg = 'You must complete amount';
                return amountError.innerText = errorMsg;
            } else if ( currentAmount !== '' ) {

                setMovement( previousMovements => {
                    return [...previousMovements, {id: uuid(), operation: (currentAmount>0) ? 'income' : 'outcome', amount: currentAmount, concept: currentConcept}]
                })
                
            }
            newMovement.current.value = null;
            newConcept.current.value = null;
            newConcept.current.focus();
        }
    }

    let balance = movements.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount, 0
    );

    const handleConcept = (e) => {
        if (e.key === 'Enter' && newMovement.current.value === '') {

            if (newConcept.current.value === '') {
                
                const conceptError = document.querySelector('#conceptError');
                let errorMsg = 'You must complete concept!';
                return conceptError.innerText = errorMsg;
            } else {
                return newMovement.current.focus();
            }

        }
    }
    const tableRows = movements.map ( movement => {
        const innerValues =  () => {
            if ( movement.amount > 0 ) {
                return (
                    <tr>
                        <td>{movement.concept}</td>
                        <td>{movement.amount}</td>
                        <td></td>
                    </tr>
                )
            } else {
                return (
                    <tr>
                        <td>{movement.concept}</td>
                        <td></td>
                        <td>{movement.amount}</td>
                    </tr>
                )
            } 
        }
        return (
            <React.Fragment>
                {innerValues()}
            </React.Fragment>            
        )
    })

    return (
        <React.Fragment>
            <section>
                <h2>You balance is: {balance}</h2>
                <article className="dataEntry">

                    <span id="conceptError"></span>
                    <input  autoFocus type='text' ref={newConcept} placeholder='Operation Concept' onKeyDown={handleConcept}></input>
                    <span id="amountError"></span>
                    <input type='number' ref={newMovement} placeholder='Operation Amount' onKeyDown={handleAmount}></input>
                    
                    <sup>Insert data and press 'return' button ⏎</sup>
                </article>
                <article className="sheetStyle">
                    <table>
                        <thead>
                            <tr>
                                <th className="tableConcept">Concept</th>
                                <th className="tableAmount">Debits</th>
                                <th className="tableAmount">Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>


                    {/* <div style={{width:'50%'}}>
                        <h3>Debits</h3>
                        {debitsList.map(item => {
                            return <li key={item.id}>{item.amount}</li>
                        })}
                    </div>
                    <div style={{width:'50%'}}>
                        <h3>Credits</h3>
                        {creditsList.map(item => {
                            return <li key={item.id}>{item.amount}</li>
                        })}
                    </div> */}
                </article>
            </section>
        </React.Fragment>
    )
}

export default MainContent;