import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch,Redirect} from "react-router-dom";
 import Home from './Home';
import Add from './Add';
import View from './View';
import './index.css';
import NavBar from "./NavBar";
import Edit from "./Edit";


function App() {
  return (
   <>
   <NavBar/>
   <Switch>

   <Route exact path="/" component={Home}/>
   <Route exact path="/Add" component={Add}/>   
   <Route exact path="/Edit/:id" component={Edit}/>  
   <Route exact path="/:id" component={View}/>   
   <Redirect to="/"/>

   </Switch>
   
   </>
  );
}

export default App;
