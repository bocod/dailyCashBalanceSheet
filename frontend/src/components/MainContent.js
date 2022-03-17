import React, { useRef, useState } from "react";
import { v4 as uuid } from 'uuid';



function MainContent() {

    const sheetStyle = {
        display:'flex',
        justifyContent: 'flexStart',
        width: '500px'
    }
    const dataEntry = {
        display: 'flex',
        flexDirection: 'column'
    }

    let newMovement = useRef();
    let newConcept  = useRef();

    const [ movements, setMovement ] = useState([
        // {
        //     id:1, 
        //     operation: 'income',
        //     amount: 1000
        // }
    ]);

    // When an amount is entered, first check if the key is 'Enter', then check if the value is not empty, !empty the state is updated
    const handleAmount = (e) => {
        let currentAmount = Number(newMovement.current.value);
        let currentConcept = newConcept.current.value;
        if (e.key !== 'Enter') return
        if ( e.key === 'Enter' ) {
            if ( currentAmount === '' ) {
                return
            } else if ( currentAmount !== '' ) {

                setMovement( previousMovements => {
                    return [...previousMovements, {id: uuid(), operation: (currentAmount>0) ? 'income' : 'outcome', amount: currentAmount, concept: currentConcept}]
                })
                
            }
            newMovement.current.value = null;
        }
    }

    let balance = movements.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount, 0
    );

    let debitsList = movements.filter(item => item.amount > 0);
    let creditsList = movements.filter(item => item.amount < 0);
    
    const handleConcept = () => {
        
        if (newConcept.current.value === '') {
            
            const conceptField = document.querySelector('validation');

            conceptField.style.display = 'block';
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
                <article style={dataEntry}>
                    <input type='text' ref={newConcept} placeholder='Operation Concept' onBlur={handleConcept}></input>
                    <p className='validation' style={{display:'none'}}>Debes ingresar un concepto</p>
                    <input type='number' ref={newMovement} placeholder='Operation Amount' onKeyDown={handleAmount}></input>
                    
                    <sup>Insert amount and press Return button ⏎</sup>
                </article>
                <article style={sheetStyle}>
                    <table style={{width:'100%'}}>
                        <thead>
                            <tr>
                                <th style={{width:'50%'}}>Concept</th>
                                <th style={{width:'25%'}}>Debits</th>
                                <th style={{width:'25%'}}>Credits</th>
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