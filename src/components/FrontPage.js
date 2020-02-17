import React, { Fragment, useEffect } from "react";
import TotalsPanel from "./TotalsPanel";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setAlert } from "../actions/alert";
import { connect } from "react-redux";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        width: "70%",
        alignContent: "center",
        padding: "20px 20px 20px 20px",
        marginTop: "20px"
    }
});

const total1 = {
    name: "Saudações",
    correct: 10,
    total: 15,
    link: "/greetings"
};

const total2 = {
    name: "Vocabulário",
    correct: 16,
    total: 21,
    link: "/vocabulary"
};

const FrontPage = ({ setAlert }) => {
    useEffect(() => {
        setTimeout(setAlert("Tente um Quiz hoje.", "success"), 1000);
    }, [setAlert]);

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Fragment>
                    <TotalsPanel totals={total1} />
                    <TotalsPanel totals={total2} />
                </Fragment>
            </Grid>
        </Container>
    );
};

export default connect(null, { setAlert })(FrontPage);
