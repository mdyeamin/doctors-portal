import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';



const Appointments = ({ date }) => {
    const { user } = useAuth()
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date])
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Time</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                            key={row._id}

                        >
                            <TableCell component="th" scope="row">
                                {row.patientName || row.name}
                            </TableCell>
                            <TableCell align="right">{row.time}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <NavLink to="/">home</NavLink>
        </TableContainer>
    );
};

export default Appointments;