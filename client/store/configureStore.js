import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from '../reducers';
import history from '../utils/history';

//import dev tools extension
import { composeWithDevTools } from 'redux-devtools-extension';

export { history };

const middlewares = [thunkMiddleware, logger, routerMiddleware(history)];

const store = createStore(
  createRootReducer(history),
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
