import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Collapse,
    FormControl, IconButton,
    Snackbar,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [phonenumber,setPhonenumber] = useState("");

    const idHandler = (e) =>{
        setId(e.currentTarget.value);
    }

    const pwHandler = (e) =>{
        setPassword(e.currentTarget.value);
    }

    const pnHandler = (e) =>{
        setPhonenumber(e.currentTarget.value);
    }

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = () => {

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const submit = async () =>{
        if(id=="" || password=="" || phonenumber==""){
            setOpen(true);
            return;
        }



        const res = await fetch("http://localhost:8090/user/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=utf-8",
            },
            body:JSON.stringify({
                'username':id,
                'password':password,
                'phone_number':phonenumber,
            }),
        });
        if(res.status == 200){
            //회원가입성공
            //navigate('/login');
            setOpen2(true);
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            flexDirection="column"
            display="flex"
            alignItems="center"
        >
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" >
                        회원정보를 입력해주세요!
                    </Alert>
                </Snackbar>
            <Collapse in={open2}>
                <Alert
                    action={
                        <Button
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            로그인페이지로
                        </Button>
                    }
                    sx={{
                        mb: 2,
                        width:300,
                        height:50,
                        fontSize:15,
                }}
                >회원가입 성공</Alert>
            </Collapse>
            <Typography
                variant="h5"
                sx={{
                    marginTop:10,
                    marginBottom:4
                }}
                fontWeight="500"
            >
                회원가입
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="ID"
                onChange={idHandler}
            />
            <TextField
                required
                id="outlined-required"
                type="password"
                label="PASSWORD"
                onChange={pwHandler}
            />
                <TextField
                    required
                    id="outlined-required"
                    type="text"
                    label="PHONE_NUMBER"
                    onChange={pnHandler}
                />
            <Button
                variant="contained"
                sx={{
                    width:220,
                    height:50,
                    marginTop:5,
                }}
                onClick={submit}
            >회원가입</Button>
        </Box>
    );
};

export default SignUp;