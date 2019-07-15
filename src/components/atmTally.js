import React from 'react'
import Heading from './heading'

type ATMTallyProps = {
    notes: Array
}

const calculateDenomination= () => {
    console.log('hello----')
    const input = document.querySelector(".input");
    const arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        let amount = input.value;
        let total = 0;
        arr.forEach(element =>{
            let denomination = parseInt(amount/element);
            var span = document.getElementsByClassName(element);
            span[0].innerText = (denomination);
            console.log(denomination)
            amount %= element;
            total += denomination;
        });
        document.querySelector(".total").innerText = (total);
        console.log(total)
}

const ATMTally = ({notes}: ATMTallyProps) => {
    return (
        <div className="row">
            <div className="col">
                <section className="left">
                    <div className="container">
                    <Heading size="2" text= "Welcome to ATM"/>
                        <div className="form-group">
                            <label htmlFor="amount" className="label1">
                                Enter the Amount
                            </label>
                            <input id="amount" type="text" className="form-field input" pattern="[0-9]{1,6}"/>
                        </div>
                        <div className="form-group">
                            <button id="button" type="button" className="btn btn-primary" onClick={calculateDenomination}>Get Money</button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col">
                <div className="table-header">
                    You will get following amount
                </div>
                <div className="amount-table">
                    {notes.map(note =>
                        <div key={note}>
                            <span className={note}>0 </span>
                                notes of Rs {note}
                        </div>  
                    )}
                </div>
                <div className="table-footer">
                    <strong>Total notes dispensed: <span className="total">0</span></strong>    
                </div>
            </div>
        </div>
    )
}

export default ATMTally;