import React, {useReducer, useState} from 'react';
import {Button} from "@mui/material";

const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const Counter = () => {
    const [number,dispatch] = useReducer(reducer,0);

    const plus=()=>{
        dispatch({type:'INCREMENT'});
    }
    const minus=()=>{
        if(number > 0) {
            dispatch({type:'DECREMENT'});
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