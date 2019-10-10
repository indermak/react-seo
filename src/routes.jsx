import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Dashboard from './pages/dashboard';
import Detail from './pages/detail';

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/detail/:id" component={Detail} />
                </Switch>
            </Router>
        )
    }
}
