import { AuthContext } from "context/auth";
import AdminLayout from "layouts/Admin.js";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "views/Pages/Error";
import Home from "views/Pages/Home";
import SignIn from "views/Pages/SignIn";
import SignUp from "views/Pages/SignUp";
import TempHome from "views/Pages/TempHome";

function App() {
  const [cookie] = useCookies(["user"]);
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const setToken = () => {
      const { user } = cookie;
      if (user) {
        dispatch({
          type: "LOGIN",
          value: {
            token: user.token,
            is_superuser: user.is_superuser,
          },
        });
      }
    };
    if (state.token === null) {
      setToken();
    }
  }, [dispatch, state, cookie]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/signin">{state.token === null ? <SignIn /> : <Redirect to="/" />}</Route>
        <Route path="/signup">{state.token === null ? <SignUp /> : <Redirect to="/" />}</Route>

        <Route path="/admin">
          {" "}
          <AdminLayout />{" "}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        return state.is_superuser === true ? children : <Redirect to="/signin" />;
      }}
    />
  );
}

function RedirectToHomeRoute({ children, ...rest }) {
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        return state.token === true ? children : <Redirect to="/" />;
      }}
    />
  );
}
