import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import ProductPage from "./ProductPage";
import HomePage from "./HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/product/:code",
        component: ProductPage,
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