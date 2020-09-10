import React from "react";
import Form from './Form';
import App from './App';
import Upload from './Galereya';
import Footer from './footer';
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
      <body>
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
            <Link to="/Gale"><button class="spin thick " >Gale</button></Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Gale">
            <Upload />
          </Route>
          <Route path="/">
              <App />
          </Route>
        </Switch>
      </div>
      <div><Footer/></div>
      </body>
    </Router>
  );
}
export default Rout;