import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from "./components/home";
import {Order} from "./components/order";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>} />
          <Route path="/order" render={(props) => <Order {...props}/>} />
        </Switch>
      </div>
    </Router>
  );
}
