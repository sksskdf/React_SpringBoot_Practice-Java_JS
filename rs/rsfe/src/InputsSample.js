import React, {useRef, useState} from 'react';

const InputsSample = () => {
    const [inputs,setInputs] = useState({
        name: '',
        nickname:''
    })

    const nameInput = useRef(); //DOM선택 쉽게해줌

    const { name , nickname } = inputs; //inputs.name 이런 식으로 접근 X 비구조화 할당을 해주어서 name으로 바로 접근
    
    const onChange=(e)=>{
        console.dir(e);
        const { value, name } = e.target; //input의 value 프로퍼티
        setInputs({
            ...inputs, //객체복사 이렇게 스프레드문법을 사용해서 깊은복사를 해주는 이유는 불변성을 지키기 위해서 인데, 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않는다.
            [name]: value
        });
    };
    
    const onReset=()=>{
        setInputs({
            name:'',
            nickname:'', //초기화
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput} />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>result: </b>
                {name} ({nickname})
            </div>
        </div>
    );
};

export default InputsSample;