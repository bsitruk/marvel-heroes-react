import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import HeroGrid from './components/HeroGrid/HeroGrid';
import SingleHero from './components/SingleHero/SingleHero';
import ComicsGrid from './components/ComicsGrid/ComicsGrid'

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';

// Import Store
import store, { history } from './store';

import '../node_modules/normalize.css'
import './index.css';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={HeroGrid} />
                <Route path="hero/:heroId" component={SingleHero} />
                <Route path="comics" component={ComicsGrid} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);