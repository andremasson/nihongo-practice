import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        alignContent: "center",
        width: "50%",
        margin: "auto",
        padding: "20px 20px 20px 20px",
        marginTop: "20px",
        gridGap: 10
    },
    buttonGroup: {
        margin: "auto",
        padding: "auto",
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: 'space-between',
        width: "100%",
        flexDirection: "row",
        gridGap: 16
    }
});

const QuizResults = ({ score }) => {
    const classes = useStyles();
    const percent = score.correct / score.total;
    return (
        <Container>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Typography variant="subtitle1">
                    Parabens por completar {score.name}!
                </Typography>
                <Typography variant="h3">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "percent"
                    }).format(percent)}
                </Typography>
                <Typography variant="subtitle2">
                    {score.correct} certas de um total de {score.total}
                </Typography>
            </Grid>
            <Grid container className={classes.buttonGroup} alignContent='space-between'>
                <Link to={`/${score.returnUrl}`}>
                    <Button variant="contained" color="primary">
                        Tentar novamente
                    </Button>
                </Link>
                <Link to="/">
                    <Button variant="outlined" color="primary">
                        Início
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
};

QuizResults.propTypes = {
    score: PropTypes.object.isRequired
};

export default QuizResults;
