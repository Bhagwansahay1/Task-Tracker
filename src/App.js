import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Component/Login_page/Signin.js";
import SignUp from "./Component/Login_page/Signup";
import Calendar from "./Component/Calendar/Calendar";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </>
  );
};
export default App;
