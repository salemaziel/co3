import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Discography from './discography';
import ScrollToTopRoute from './components/scrolltoTop'

import ScrollToTop from 'react-router-scroll-top'
 
   
const App = () => (
  <BrowserRouter>
      <ScrollToTop>
            <Switch>
             <Route path="/" component={Home} exact/>
             <ScrollToTopRoute path="/discography" component={Discography}/>
            <Route component={Error}/>
           </Switch>
      </ScrollToTop>
      </BrowserRouter>
    )


export default App;