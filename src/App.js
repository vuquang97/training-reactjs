import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="bg-body">
                    <div>
                        <main id="mainContainer">
                            <Switch>
                                {this.showContentMenus(routes)}
                            </Switch>
                            <Footer />
                        </main>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            })
        }
        return result;
    }
}

export default App;
