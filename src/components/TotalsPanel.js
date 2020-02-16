import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider, Grid, Button } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        direction: "column",
        "& > *": {
            margin: theme.spacing(1)
        },
        width: "220px",
        marginBottom: "20px"
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500]
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500]
    },
    divider: {
        width: "100%",
        marginBottom: "10px"
    }
}));

const TotalsPanel = ({ totals }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <Avatar className={classes.orange}>
                    {totals.name.slice(0, 1)}
                </Avatar>
                <Typography variant="h4" noWrap>
                    {totals.name}
                </Typography>
                <Divider className={classes.divider} />
                <p>
                    {totals.correct} certas de {totals.total} tentativas
                </p>
                <Divider className={classes.divider} />
                <Button variant="contained" color="primary" href={totals.link}>
                    Iniciar Quiz!
                </Button>
            </Grid>
        </Paper>
    );
};

TotalsPanel.propTypes = {
    totals: PropTypes.object.isRequired
};

export default TotalsPanel;
