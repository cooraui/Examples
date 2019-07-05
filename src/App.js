import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
            <Menu></Menu>
            <Switch>
              {this.showMenuContent(routes)}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  showMenuContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((data,i)=>
        <Route 
          key={i} 
          path={data.path} 
          exact={data.exact} 
          component={data.page} 
        />)}
    return result;
  }
}

export default App;
