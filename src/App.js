import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './landing';
import People from './people';
import Xyz from "./xyz"

function App() {
  return (
    <>
    <Router>
    <Switch>
     <Route exactpath="/" ><Landing/></Route>   
     <Route path="/people/:id"><People/></Route>
     </Switch>
     </Router>
    </>
  );
}

export default App;
