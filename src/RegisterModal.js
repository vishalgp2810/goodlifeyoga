

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Alert from '@material-ui/lab/Alert';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const registerData = [
    {
        label: 'Full Name ',
        type: 'text'
    },
    {
        label: 'Email',
        type: 'text'
    },
    {
        label: 'Phone Number',
        type: 'text'
    },
]

export default function SignIn(props) {
    const classes = useStyles();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [aleart, setAleart] = useState(null);


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                  </Typography>
                    <form className={classes.form} noValidate>
                        {
                            registerData && registerData.map((record, index) => {
                                return <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label={record.label}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                            })
                        }
                        <CountryDropdown

                            autoFocus
                            style={{ width: '100%', padding: '15px', marginTop: '3px' }}
                            value={country}
                            onChange={(val) => setCountry(val)} />
                        <RegionDropdown
                            style={{ width: '100%', padding: '15px', marginTop: '10px' }}
                            autoFocus
                            country={country}
                            value={state}
                            onChange={(val) => setState(val)} />


                        {aleart}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => setAleart(<Alert variant="outlined" severity="success">
                            You have Register successfully
                          </Alert>)}
                        >
                            Register
                       </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}