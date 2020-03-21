import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Discography from './discography';
import ScrollToTopRoute from './components/scrolltoTop'

import ScrollToTop from 'react-router-scroll-top'
 
//class App extends Component {
//  render() {
//    return (      
const App = () => (
  <BrowserRouter>
      <ScrollToTop>
            <Switch>
             <Route path="/" component={Home} exact/>
             <ScrollToTopRoute path="/discography" component={Discography}/>*/}
             {/*<Route path="/discography" component={Discography} />*/}
            <Route component={Error}/>
           </Switch>
      </ScrollToTop>
        {/*<ScrollToTopRoute path="/discography" component={Discography} />*/}
      </BrowserRouter>
    )


export default App;