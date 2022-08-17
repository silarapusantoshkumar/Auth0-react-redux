import { compose, createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default configureStore;
