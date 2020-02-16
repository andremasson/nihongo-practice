import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";

const Alert = ({ alert }) => {
    useEffect(() => {
        if (alert.msg !== null && alert.msg !== undefined) {
            showAlert(alert.msg);
        } else {
            setOpen(false);
        }
    }, [alert]);

    const [open, setOpen] = useState(false);

    const showAlert = msg => {
        setOpen(true);
    };

    const transition = props => {
        return <Fade {...props} />;
    };

    return (
        <Snackbar
            open={open}
            TransitionComponent={transition}
            message={alert.msg}
            autoHideDuration={alert.timeout}
        />
    );
};

Alert.propTypes = {
    alert: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps)(Alert);
