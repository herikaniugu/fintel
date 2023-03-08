import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import Head from 'next/head';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import styles from '@/styles/Home.module.css'


export default function ReturnOnInvestmentCalculator() {
    const [years, setYears] = React.useState(0);
    const currencies = [
        {
            value: 'TZS',
            label: 'TZS',
        },
        {
            value: 'USD',
            label: 'USD',
        },
        {
            value: 'EUR',
            label: 'EUR',
        },
        {
            value: 'OTHER',
            label: '...',
        }
    ];
    const rows = [
        { name: "Capital Gains", amount: 0, percentage: 0 },
        { name: "Cash Inflow",   amount: 0, percentage: 0 },
        { name: "Total Profit",  amount: 0, percentage: 0 },
        { name: "Total Amount",  amount: 0, percentage: null }
    ];
    const getInput = (value : string) => {
        return value ? parseFloat(value.replaceAll(/,/g, "")) : 0;
    };
    const getValue = (value : number) => {
        return value ? value.toLocaleString("en-US") : "";
    };
    return (
        <React.Fragment>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100vh" }}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Box sx={{ width: "100%", padding: 4 }}>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: "white",
                                        mb: 4
                                    }}>
                                    Return on Investment Calculator
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Stack direction="column" spacing={2}>
                                            <Stack direction="row" spacing={2}>
                                                <TextField id="standard-basic" label="Capital Invested" variant="standard" sx={{ width: "100%" }}/>
                                                <TextField
                                                    id="standard-select-currency"
                                                    select
                                                    label="Currency"
                                                    defaultValue="TZS"
                                                    variant="standard"
                                                    sx={{ width: 80 }}>
                                                    {
                                                        currencies.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </TextField>
                                            </Stack>
                                            <TextField id="standard-basic" label="Current Value (Optional)" variant="standard" sx={{ width: "100%" }} />
                                            <TextField id="standard-basic" label="Cash Income (Optional)" variant="standard" sx={{ width: "100%" }} />
                                            <TextField id="standard-basic" label="Other Expenses (optional)" variant="standard" sx={{ width: "100%" }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="column" spacing={2}>
                                            <TextField id="standard-basic" label="Tax Rate on Capital Gains" variant="standard" sx={{ width: "100%" }} />
                                            <TextField id="standard-basic" label="Tax Rate on Cash Income" variant="standard" sx={{ width: "100%" }} />
                                            <TextField
                                                id="standard-basic"
                                                label="Number of years invested"
                                                variant="standard"
                                                sx={{ width: "100%" }}
                                                value={getValue(years)}
                                                onChange={(e) => setYears(getInput(e.target.value))}/>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: "100%", background: "white", padding: 4, borderRadius: 2, height: "100%" }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ borderBottom: "none" }}></TableCell>
                                            <TableCell align="right" sx={{ borderBottom: "none" }}>Amount</TableCell>
                                            <TableCell align="right" sx={{ borderBottom: "none" }}>Percentage</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            rows.map((row, index) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.amount}</TableCell>
                                                    <TableCell align="right">{index < 3 ? row.percentage + "%" : ""}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}