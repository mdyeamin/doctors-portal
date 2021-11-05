import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChacge = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[filed] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password didnt match ')
        }
        e.preventDefault()

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="confrom Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChacge}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/login">
                            <Button

                                variant="text">All ready registered? Pleace Login</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;