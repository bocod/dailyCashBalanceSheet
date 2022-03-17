import React, { useRef, useState } from "react";

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

    let balance = 1500;
    let newMovement = useRef();

    const [ movement, setMovement ] = useState([
        {
            id:1, 
            operation: 'income',
            amount: 1000
        }
    ]);

    return (
        <React.Fragment>
            <section>
                <h2>You balance is: {balance}</h2>
                <article style={dataEntry}>
                    <div>
                        <input type='radio' name='operation' id='income'></input><label htmlFor='income'>Income</label>
                        <input type='radio' name='operation' id='outcome'></input><label htmlFor='outcome'>Outcome</label>
                    </div>
                    <input type='number' ref={newMovement} placeholder='Operation Amount'></input>
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