import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    ButtonGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 350,
        marginTop: 25,
        marginBottom: 25,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const QuestionCard = ({ card, selectAnswer }) => {
    useEffect(() => {
        setSelectedId(-1);
    }, [card]);
    const classes = useStyles();
    const [selectedId, setSelectedId] = useState(-1);

    const onClick = id => {
        setSelectedId(id);
        selectAnswer(id);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                >
                    {card.question}
                </Typography>
                <Typography variant="h5" component="h4">
                    {card.romanji}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                >
                    {card.answers &&
                        card.answers.map(an => (
                            <Button
                                key={an.id}
                                variant={
                                    selectedId === an.id
                                        ? "contained"
                                        : "outlined"
                                }
                                onClick={() => onClick(an.id)}
                            >
                                {an.text}
                            </Button>
                        ))}
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

QuestionCard.propTypes = {
    card: PropTypes.object.isRequired,
    selectAnswer: PropTypes.func.isRequired
};

export default QuestionCard;
