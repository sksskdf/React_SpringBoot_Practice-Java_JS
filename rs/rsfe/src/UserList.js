import React from 'react';


const User=({user})=>{ //반복적으로 사용되는 부분은 컴포넌트화 시켜 사용한다.
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

const UserList = ({users}) => {
    return (
        <div>
            {users.map((users,index) =>(
                <User user={users} key={index}/>
            ))}
        </div>
    );
}

export default UserList;