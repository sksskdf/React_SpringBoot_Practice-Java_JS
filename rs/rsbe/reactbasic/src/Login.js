import React from 'react';
import {Box, Button, ButtonGroup, Container, TextField, Typography} from "@mui/material";
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Box component="form"
                 sx={{
                     '& .MuiTextField-root': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off"
                 flexDirection="column"
                 display="flex"
                 alignItems="center">
                <Typography variant="h5"
                            sx={{
                                marginTop:10,
                                marginBottom:4
                            }}
                            fontWeight="500">
                    로그인
                </Typography>
            <TextField id="outlined-basic" label="ID" variant="outlined" />
            <TextField id="outlined-basic" label="PASSWORD" variant="outlined" type="password"/>
            <ButtonGroup orientation="vertical"
                         aria-label="vertical outlined button group"
                         variant="contained">
                <Button key="login"
                        sx={{
                            width:230,
                            height:45
                        }}
                >로그인
                </Button>
                <Button key="signup"
                    sx={{
                        width:230,
                        height:45
                    }}>
                    <Link to="/signup" style={{
                        color:"#fff",
                        textDecoration:"none"
                    }}>
                    회원가입
                    </Link>
                </Button>
            </ButtonGroup>
            </Box>
        </Container>
    );
};

export default Login;