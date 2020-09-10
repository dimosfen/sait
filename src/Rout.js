import React from "react";
import Form from './Form';
import App from './App';
import  './Button.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export  function Rout() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li > 
            <Link to="/"><button class="spin thick " >Home</button></Link>
            </li>
            <li >
            <Link to="/Form"><button class="spin thick " >Form</button></Link>
            </li>
            <li >
            <Link to="/Users"><button class="spin thick " >Users</button></Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
              <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Users() {
  return <h2>Users</h2>;
}

export default Rout;