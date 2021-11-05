import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { fontWeight } from '@mui/system';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,.8)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}
const AppointmentBanner = () => {
    return (


        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{
                        width: '400px',

                        marginTop: "-110px"
                    }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" style={{ color: "#5CE7ED" }}>
                        Appointment
                    </Typography>
                    <Typography variant="h4" style={{ color: 'white' }}>
                        Make an Appointment Today
                    </Typography>
                    <Typography variant="h6" style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci dicta mollitia tempora incidunt voluptatum autem vel alias, repudiandae harum.
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>Learn More</Button>
                </Grid>

            </Grid>
        </Box>


    );
};

export default AppointmentBanner;