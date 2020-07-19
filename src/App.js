import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="*" component={Error}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
