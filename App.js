import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Product/Home";
function App() {
return (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);