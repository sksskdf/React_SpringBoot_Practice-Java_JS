import React from 'react';
import {Button, TextField} from "@mui/material";

const CreateUser = ({username,email,onChange,onCreate}) => {
    return (
        <div style={{
            display:'flex',
            marginBottom:'20px'
        }}>
            <TextField
                autoComplete="off"
                label="USERNAME"
                variant="outlined"
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <TextField
                autocomplete="off"
                label="EMAIL"
                variant="outlined"
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <Button
                variant="contained"
                onClick={onCreate}>등록</Button>
        </div>
    );
};

export default React.memo(CreateUser);