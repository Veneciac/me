import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectList from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  return (
  <Router basename="/">
    <div className="App">
        <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/project" component={ProjectList} />
              <Route exact path="/project/:id" component={ProjectDetail} />
              <Route exact path="/me" component={Profile} />
              <Route path="/" component={Home} />
            </Switch>
        </div>
    </div>
  </Router>
  );
}

export default App;
