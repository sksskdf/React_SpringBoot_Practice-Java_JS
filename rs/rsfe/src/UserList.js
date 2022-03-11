import React, {useContext, useEffect} from 'react';
import {UserDispatch} from "./User";


const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => {
                    dispatch({ type: 'TOGGLE_USER', id: user.id });
                }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id:user.id });
            }}>삭제</button>
        </div>
    );
});

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default React.memo(UserList);