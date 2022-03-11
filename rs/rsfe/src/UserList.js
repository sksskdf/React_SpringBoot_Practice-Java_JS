import React, {useEffect} from 'react';


const User=({user,onRemove,onToggle})=>{ //반복적으로 사용되는 부분은 컴포넌트화 시켜 사용한다.

    useEffect(()=>{
            console.log('user 값이 설정됨');
            console.log(user);
            return () => {
                console.log('user 가 바뀌기 전..');
                console.log(user);
            };
        },[user]);


    return (
        <div>
            <b
                style={{
                    cursor:'pointer',
                    color:user.active?'green':'black'
                }}
                onClick={()=>onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
    );
}

const UserList = ({users,onRemove,onToggle}) => {
    return (
        <div>
            {users.map((users,index) =>(
                <User
                    user={users}
                    key={index}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;