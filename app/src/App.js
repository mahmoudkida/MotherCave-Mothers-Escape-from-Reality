import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

import PostList from './components/posts_list';
import PostDetails from './components/post_detail';


import store from './stores';


const history = createHistory();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
              <a href="../" className="navbar-brand">Mother Cave</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">

                </ul>

              </div>
            </div>
          </div>
          <main className="container">
            <Route exact path="/" component={PostList} />
            <Route path="/postDetails/:id" component={PostDetails} />
          </main>

        </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
