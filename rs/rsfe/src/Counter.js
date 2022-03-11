import React, {useState} from 'react';
import {Button} from "@mui/material";

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
            <Button variant="contained" onClick={minus}>-1</Button>
            <Button variant="contained" onClick={plus}>+1</Button>
        </div>
    );
};

export default Counter;