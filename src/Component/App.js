import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import SignUp from "./Signup";
import Calender from "./Calendar";
import { AuthProvider } from "../Authentication/Auth";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/calender" component={Calender} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};
export default App;
