import React, {useMemo, useRef, useState} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const countActiveUsers=users=>{
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user=>user.active).length;
}

const GiveUserList = () => {
    const [inputs,setInputs] = useState({
        username:'',
        email:''
    });

    const { username,email } = inputs;

    const onChange = e => {
        const {name,value} = e.target; //비구조화할당
        setInputs({
            ...inputs,
            [name]: value //대괄호는 key값을 의미
        });
    };

    const [users,setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@examile.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);

    const onCreate=()=>{
        const user = {
            id:nextId.current,
            username,
            email
        };
        setUsers([...users,user]);
        setInputs({ //create를 하고 난뒤 초기화
            username: '',
            email:''
        });
        nextId.current += 1;
    }

    const onRemove = id =>{
        setUsers(users.filter(user=>user.id !== id)); //특정조건이 만족하는 원소들만 추출해서 새로운 배열을 만든다. 파라미터로 들어온 id를 뺀 배열을 만든다. -> 해당 id 삭제
    }

    const onToggle = id => {
        setUsers(
            users.map(user=>
            user.id === id ? {...user,active: !user.active}:user
            )
        );
    };

    const count = useMemo(()=>countActiveUsers(users),[users]);

    return (
        <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성사용자 수 : {count}</div>
        </>
    );
};

export default GiveUserList;