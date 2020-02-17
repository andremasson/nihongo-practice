import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getGreetings } from "../actions/greetings";
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

const GreetingQuiz = ({ match, getGreetings, greetings }) => {
    const classes = useStyles();

    useEffect(() => {
        getGreetings();
    }, [getGreetings]);

    return (
        <Container className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid>
                    <Typography variant="h4">Saudações</Typography>
                    <span>{greetings !== null && greetings.collection.length} cards</span>
                </Grid>

                <Link to="/quiz/greetings">
                    <Button color="primary" variant="contained">
                        Iniciar agora!
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    greetings: state.greetings
});

export default connect(mapStateToProps, { getGreetings })(GreetingQuiz);
