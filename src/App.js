import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <AuthWrapper>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact={true}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthWrapper>
  );
};

export default App;
