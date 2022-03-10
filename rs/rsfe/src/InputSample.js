import React, {useState} from 'react';

const InputSample = () => {
    const [text,setText] = useState('');

    const onChange=(e)=>{
        setText(e.target.value);
    }

    const onReset=()=>{
        setText('');
    }

    const addSome=()=>{
        const list = document.querySelector('#list');
        const inputVal = document.querySelector('#inputVal');
        const button = document.createElement("button");
        const li = document.createElement("li");
        li.innerText = inputVal.value;
        li.id = Date.now(); button.innerText = "✖";
        button.style.padding='2px 5px';
        button.style.marginLeft='10px';
        li.style.listStyle = 'none';
        button.addEventListener("click",(e)=>{
            console.log(e.target.parentElement);
            li.remove(e.target.parentElement);
        });
        li.appendChild(button);
        list.appendChild(li);
        console.dir(inputVal);
    }


    return (
        <div>
            <input id='inputVal'  onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <button onClick={addSome}>추가</button>
            <div id='list'>
                <b>todo: {text} </b>
            </div>
        </div>
    );
};

export default InputSample;