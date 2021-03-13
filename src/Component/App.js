import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./Signin";
import SignUp from "./Signup";
import Calendar from "./Calendar";
import { AuthsProvider } from "../Authentication/Auth";
const App = () => {
  return (
    <>
      <Router>
        <AuthsProvider>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/calendar" component={Calendar} />
          </Switch>
        </AuthsProvider>
      </Router>
    </>
  );
};
export default App;
