import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import { setAlert } from "./actions/alert";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";

const App = () => {
    useEffect(() => {
        setTimeout(
            () => store.dispatch(setAlert("Tente um Quiz hoje.", "success")),
            1000
        );
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={FrontPage} />
                </Switch>
                <Alert />
            </Router>
        </Provider>
    );
};

export default App;
