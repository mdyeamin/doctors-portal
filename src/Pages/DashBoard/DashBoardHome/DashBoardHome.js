import * as React from 'react';
import { Grid } from '@mui/material';
import Appointments from '../Appointments/Appointments';
import Calendar from '../../../Shared/Calendar/Calendar'

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calendar
                    date={date}
                    setDate={setDate}
                ></Calendar>
            </Grid>
            <Grid item xs={12} md={6}>
                <Appointments
                    date={date}
                ></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashBoardHome;