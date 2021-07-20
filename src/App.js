import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import LoginCred from './components/pages/LoginCred';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  // if (details.email == adminUser.email && details.password == adminUser.password){
  //     console.log("Logged In");
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     })
  // } else {
  //   console.log("Details do not match!");
  //   setError("Details do not match!");
  //   }
  // }
  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({name: "", email: ""});
  // }

  return (
    
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/login' component={LoginCred} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
