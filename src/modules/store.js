import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules/reducers'

export default function configureStore(initialState) {
  
  const middlewares = [
    thunk,
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules/reducers', () => {
      const nextReducer = require('../modules/reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}