import { Button, Container, Grid, TextField, Typography, LinearProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { isLoading, user, authError, loginUser, signinWithGoogle } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const handleOnChacge = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[filed] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, history)
    }
    
    const handleGoogleSignin = () => {
        signinWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChacge}
                            label="Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChacge}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register">
                            <Button variant="text">New User? Pleace Register</Button>
                        </NavLink>
                    </form>
                    {
                        user.email && <Alert severity="success">added success </Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    {isLoading && <LinearProgress />}
                    <Button onClick={handleGoogleSignin} variant="contained">Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
            <NavLink to="/">home</NavLink>
        </Container>
    );
};

export default Login;