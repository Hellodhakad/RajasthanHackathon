import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import EnterOtp from './EnterOtp.component.jsx';
import Main from './Main.component.jsx';
import LoginForm from "./LoginForm.component";
import SignupForm from "./SignupForm.component";
//import Panel from './Panel.component';
import { Link } from 'react-router-dom';



ReactDOM.render((
     <BrowserRouter>
     <div>
          <Route exact path="/" component={Main}/>
          <Route path="/enterotp" component={EnterOtp}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
          {/*<Route path="/panel" component={Panel}/>*/}
     </div>
     </BrowserRouter>
     ),
     document.getElementById('root')
);