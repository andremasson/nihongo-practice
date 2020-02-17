import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import VocabularyQuiz from "./components/VocabularyQuiz";
import GreetingQuiz from "./components/GreetingQuiz";
import Quiz from "./components/Quiz";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={FrontPage} />
                    <Route
                        exact
                        path="/vocabulary"
                        component={VocabularyQuiz}
                    />
                    <Route exact path="/greetings" component={GreetingQuiz} />
                    <Route exact path="/quiz/:name" component={Quiz} />
                </Switch>
                <Alert />
            </Router>
        </Provider>
    );
};

export default App;
