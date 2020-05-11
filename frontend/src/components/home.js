import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),

    },
    control: {
        padding: theme.spacing(2),
    },
}));

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [redirect, setRedirect] = useState();
    const [confirmProduct, setConfirmProduct] = useState();
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        await fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    setProducts(data.data);
                }
            });
    };
    const clickHandler = (product) => {
        setConfirmProduct(product);
        setRedirect('/order')

    }
    const classes = useStyles();
    if (redirect) {
        return <Redirect to={{ pathname: redirect, state: { confirmProduct } }} />
    }
    return (
        <div>
            <h2>Home</h2>
            <div className='main'>
                <div className='products'>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item sm={12}>
                            <Grid container justify="center" spacing={4}>
                                {products.map(product => {
                                    return (
                                        <Grid key={product._id} item>
                                            <Paper className={classes.paper} onClick={() => clickHandler(product)}>
                                                <img src={product.image} width='125' height='150' alt='t-shirt' />
                                                <p><b>Color: </b> {product.color}</p>
                                                <p><b>Price: </b> {product.price}</p>
                                                <p><b>Size: </b> {product.size}</p>
                                            </Paper>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}