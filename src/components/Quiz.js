import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { setAlert } from "../actions/alert";
import { Button, Grid, Typography, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getVocabulary } from "../actions/vocabulary";
import { getGreetings } from "../actions/greetings";
import QuizResults from "./QuizResults";


const useStyles = makeStyles({
    root: {
        margin: "auto",
        padding: "auto",
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column"
    },
    result: {
        zIndex: 1,
        position: 'relative',
        margin: 10,
      },
});

const Quiz = ({ match, collection, getVocabulary, getGreetings, realName }) => {
    const [isOver, setIsOver] = useState(false);
    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answerId, setAnswerId] = useState(-1);
    const name = match.params.name;
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (collection.length === 0) {
            if (name === "greetings") {
                getGreetings();
            }
            if (name === "vocabulary") {
                getVocabulary();
            }
        }
    }, [name, collection.length, getVocabulary, realName, getGreetings]);

    const confirmButton = () => {
        if (isOver || answerId === -1) return;

        let correctAnswer = false;
        collection[currentIndex].answers.map(
            an =>
                an.id === answerId &&
                an.correct === true &&
                (correctAnswer = true)
        );

        if (correctAnswer) {
            setScore(score + 1);
        }

        setAnswerId(-1);
        if (currentIndex + 1 < collection.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsOver(true);
        }
    };

    const selectAnswer = answerId => {
        setAnswerId(answerId);
    };

    if (collection.length === 0) {
        return (
            <div className={classes.root}>
                <h3>Sem cards para exibir</h3>
            </div>
        );
    }

    if (isOver) {
        return (
            <Slide direction="up" in mountOnEnter unmountOnExit>
                <div className={classes.result}>

                <QuizResults
                    score={{
                        correct: score,
                        total: collection.length,
                        name: realName,
                        returnUrl: name
                    }}
                />
                </div>
            </Slide>
        );
    }

    return (
        <Grid className={classes.root} container spacing={10} item>
            <Typography variant="subtitle2">{realName}</Typography>
            <Typography variant="overline">
                Pergunta {currentIndex + 1} de {collection.length}
            </Typography>

            <div>
                <QuestionCard
                    card={collection[currentIndex]}
                    selectAnswer={selectAnswer}
                />
            </div>
            <div>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={confirmButton}
                >
                    Confirmar
                </Button>
            </div>
        </Grid>
    );
};

Quiz.propTypes = {
    collection: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

const mapStateToProps = (state, { match }) => ({
    collection:
        state[match.params.name] !== undefined
            ? state[match.params.name].collection
            : [],
    populateFunctionName: state[match.params.name].functionName,
    realName: state[match.params.name].realName
});

export default connect(mapStateToProps, {
    setAlert,
    getVocabulary,
    getGreetings
})(Quiz);
