import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import GithubReposPage from "./GithubReposPage";
import NonExistentPage from "./NonExistentPage";
import GithubRepoPage from "./GithubRepoPage";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/repos/:user",
    component: GithubReposPage,
  },
  {
    path: "/repo/:user/:repo",
    component: GithubRepoPage,
  },
  {
    component: NonExistentPage
  }
];

const routesElems = routes.map((routeConf, i) => {
  const $content = (props) => <routeConf.component {...props} />;
  return <Route key={i} path={routeConf.path} exact={routeConf.exact} render={(props) => $content(props)} />
});

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routesElems}
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
