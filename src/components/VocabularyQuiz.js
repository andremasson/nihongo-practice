import React, { useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getVocabulary } from "../actions/vocabulary";
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

const VocabularyQuiz = ({ match, getVocabulary, vocabulary }) => {
    const classes = useStyles();

    useEffect(() => {
        getVocabulary();
    }, [getVocabulary]);

    return (
        <Container className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid>
                    <Typography variant="h4">Vocabulário</Typography>
                    <span>{vocabulary !== null && vocabulary.collection.length} cards</span>
                </Grid>

                <Link to="/quiz/vocabulary">
                    <Button color="primary" variant="contained">
                        Iniciar agora!
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
};

const mapStateToProps = state => ({
    vocabulary: state.vocabulary
});

export default connect(mapStateToProps, { getVocabulary })(VocabularyQuiz);
