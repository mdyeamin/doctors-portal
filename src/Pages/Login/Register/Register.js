import { Button, Container, Grid, LinearProgress, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../Hooks/useAuth'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth()
    const handleOnBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[filed] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('password didnt match ')
            return
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history)

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Neme"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="confrom Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login">
                            <Button

                                variant="text">All ready registered? Pleace Login</Button>
                        </NavLink>
                    </form>}
                    {
                        user.email && <Alert severity="success">added success </Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    {isLoading && <LinearProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
            <NavLink to="/">home</NavLink>
        </Container>
    );
};

export default Register;