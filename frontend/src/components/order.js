import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        color: 'red'
    }
}));

export const Order = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    console.log(props, name)
    if (!props.location.state) {
        return <Redirect to='/' />
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {};
        if (!name || name.length < 5 || name.length > 25) {
            setError('Name should be more than 5 letters and less than 25 letters');
        } else if (!email) {
            setError('Email is required');
        } else if (!mobile || mobile.length != 12) {
            setError('Mobile Number is not correct');
        } else if (!address) {
            setError('Address is Required');
        } else {
            obj = {
                productID: props.location.state.confirmProduct._id,
                name,
                mobileNumber: mobile,
                address,
                email,
            }
        }
        console.log(obj)
        fetch('http://localhost:8000/',{
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        }).catch((error) => {
            console.error('Error:', error);
          });
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item sm={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src={props.location.state.confirmProduct.image} width='300' height='350' />
                    <p><b>Color: </b> {props.location.state.confirmProduct.color}</p>
                    <p><b>Price: </b> {props.location.state.confirmProduct.price}</p>
                    <p><b>Size: </b> {props.location.state.confirmProduct.size}</p>
                </div>
            </Grid>
            <Grid item sm={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Confirm Order
                        </Typography>
                    <p className={classes.error}>{error}</p>
                    <form className={classes.form} noValidate >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            placeholder="John Doe"
                            onChange={(ev) => setName(ev.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            placeholder="abc@gmail.com"
                            onChange={(ev) => setEmail(ev.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="mobileNumber"
                            label="Mobile Number"
                            name="mobileNumber"
                            autoComplete="mobileNumber"
                            placeholder="92XXXXXXXXXX"
                            onChange={(ev) => setMobile(ev.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Address"
                            label="Address"
                            type="Address"
                            id="Address"
                            multiline
                            rows="4"
                            autoComplete="Address"
                            onChange={(ev) => setAddress(ev.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Confirm
            </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}