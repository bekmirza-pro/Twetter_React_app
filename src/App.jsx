import React, { useContext } from "react";
import "./App.scss";
import { Switch, NavLink } from "react-router-dom";
import { Context } from "./Context/Theme";
import { ContextLang } from "./Context/Language";

import Public from "./Routes/Public";
import Private from "./Routes/Previte";
// import { ContextLang } from "../../Context/Language";
//====> pages

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import useToken from "./Hooks/useToken";

function App() {
  const [token] = useToken();
  const ctx = useContext(Context);
  const lng = useContext(ContextLang);
  console.log(lng);
  console.log(ctx);

  return (
    <>
      <nav>{!token && <NavLink to="/login"> </NavLink>}</nav>
      <Switch>
        <Public path="/" component={Home} exact />
        <Private path="/profile" component={Profile} exact />
        <Public path="/login" component={Login} exact />
      </Switch>
    </>
  );
}

export default App;
