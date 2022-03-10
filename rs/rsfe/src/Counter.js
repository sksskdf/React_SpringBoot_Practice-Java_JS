import React, {useState} from 'react';

const Counter = () => {
    const [number,setNumber] = useState(0);
    const plus=()=>{
        setNumber(n=>n+1);
    }
    const minus=()=>{
        if(number > 0) {
            setNumber(n=>n- 1);
        }
    }

    return (
        <div>
           <h1>{number}</h1>
            <button onClick={minus}>-1</button>
            <button onClick={plus}>+1</button>
        </div>
    );
};

export default Counter;