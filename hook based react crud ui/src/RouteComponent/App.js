
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,HashRouter,Route ,Switch} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Error from './Error'
import Work from './Work'
import AddStudentForm from '../components/AddStudentForm'

function App() {
  
  return (
//part 1 linkbased routing
   <BrowserRouter>
   <div>
     <Header />
    
     <Switch>
       <Route path="/" component={Home} exact={true}></Route>
       <Route path="/portfolio" exact={true} component={Portfolio}></Route>
       <Route path="/portfolio/:id" component={Work}></Route>
       <Route path="/contact" component={Contact}></Route>
       <Route  component={Error}></Route>

     </Switch>
     </div>
     </BrowserRouter>
     //or hash based routing
//part 2
		//   <div>
    //   <HashRouter>
      
     
    //   <Route path="/" component={Home} exact={true}></Route>
    //  <Route path="/form"  component={AddStudentForm}></Route>
    //   </HashRouter>
    //   </div>
      
  
  );
}

export default App;
