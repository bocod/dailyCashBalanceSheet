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

    let balance = 0;
    let newMovement = useRef();

    const [ radioSelection, setRadioSelection ] = useState([]);

    const [ currentAmount, setAmount ] = useState(0);

    const [ movements, setMovement ] = useState([
        // {
        //     id:1, 
        //     operation: 'income',
        //     amount: 1000
        // }
    ]);

    // Capture and storage of radio selection changes
    const handleRadioSelection = (e) => {
        
        setRadioSelection( e.target.value );

    };

    // Capture and storage amount 


    // When an amount is entered, first check if the key is 'Enter', then check if the value is not empty, !empty the state is updated
    const handleAmount = (e) => {
        if (e.key !== 'Enter') return
        if ( e.key === 'Enter' ) {
            if ( newMovement.current.value === '' ) {
                return
            } else if ( newMovement.current.value !== '' ) {
                setAmount (
                    newMovement.current.value
                )
                setMovement( previousMovements => {
                    return [...previousMovements, {id: uuid(), operation: radioSelection, amount: currentAmount}]
                })
                console.log(`Apretó ${e.key} con el valor ${newMovement.current.value}`)
                console.log(movements);
                
            }
            newMovement.current.value = '';
        }
    }



    return (
        <React.Fragment>
            <section>
                <h2>You balance is: {balance}</h2>
                <article style={dataEntry}>
                    <div onChange={handleRadioSelection}>
                        <input type='radio' name='operation' id='income' value='income'></input><label htmlFor='income'>Income</label>
                        <input type='radio' name='operation' id='outcome' value='outcome'></input><label htmlFor='outcome'>Outcome</label>
                    </div>
                    <input type='number' ref={newMovement} placeholder='Operation Amount' onKeyDown={handleAmount}></input>
                    <sup>Insert amount and press Return button ⏎</sup>
                </article>
                <article style={sheetStyle}>
                    <div style={{width:'50%'}}>
                        <h3>Debits</h3>
                    </div>
                    <div style={{width:'50%'}}>
                        <h3>Credits</h3>
                    </div>
                </article>
            </section>
        </React.Fragment>
    )
}

export default MainContent;