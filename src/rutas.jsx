import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from './Login'

function Login (){
   return(
      <>
      <Router>
         <Switch>
            <Route path="/Acceder" component={Login}></Route>
         </Switch>
      </Router>
      </>
   );
}

export default rutas;