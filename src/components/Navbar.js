import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Navbar = () => {
    const classes = useStyles();

    const links = (
        <ul className="mui-list--inline mui--text-body2">
            <li>
                <Link to="/greetings/edit">
                    <Button color="secondary" variant="contained">
                        Saudações
                    </Button>
                </Link>
            </li>
            <li>
                <Link to="/vocabulary/edit">
                    <Button color="secondary" variant="contained">
                        Vocabulário
                    </Button>
                </Link>
            </li>
        </ul>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">NIHONGO Practice</Link>
                    </Typography>
                    <Fragment>{links}</Fragment>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
