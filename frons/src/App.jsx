import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Profile from './components/profile/Profile'
import Rankings from './components/rankings/Rankings'
import Progress from './components/progress/Progress'
import Search from './components/search/Search'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/rankings">Rankings</Link>
          </li>
          <li>
            <Link to="/progress">Progress</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/rankings">
          <Rankings />
        </Route>
        <Route exact path="/progress">
          <Progress />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

