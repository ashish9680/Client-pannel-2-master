import React from 'react'

import { lazy, Suspense, useEffect } from 'react';

// Components
import Index from './jsx/index';
import { connect, useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

// action
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

const Login = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./jsx/pages/Login')), 3000);
    });
});

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        checkAutoLogin(dispatch, props.history);
    }, [dispatch, props.history]);
    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
        </Switch>
    );
    if (props.isAuthenticated.success) {
        return (
            <Suspense fallback={
                <div id="preloader">
                    <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1"></div>
                        <div className="sk-child sk-bounce2"></div>
                        <div className="sk-child sk-bounce3"></div>
                    </div>
                </div>
            }
            >
                <Index />
            </Suspense>
        );
    } else {
        return (
            <div className="" >
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    {routes}
                </Suspense>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 
