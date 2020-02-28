import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Discography from './Discography';
import Discography01 from './Discography01'
import ScrollToTopRoute from './components/scrolltoTop'
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <ScrollToTopRoute path="/discography" component={Discography}/>
             <ScrollToTopRoute path="/Discography01" component={Discography01}/>
            <Route component={Error}/>
           </Switch>
        </div> 
        {/*<ScrollToTopRoute path="/discography" component={Discography} />*/}
      </BrowserRouter>
    );
  }
}

export default App;