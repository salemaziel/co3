import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Discography from './components/discography';

import ScrollToTopRoute from './components/scrolltoTop'
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/discography" component={Discography}/>
             {/*<Route path="/container01a" component={Container01a}/>*/}
            <Route component={Error}/>
           </Switch>
        </div> 
        <ScrollToTopRoute path="/discography" component={Discography} />
      </BrowserRouter>
    );
  }
}

export default App;