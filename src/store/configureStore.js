import { createStore } from 'redux';
import rootReducer from './rootReducer';
import middlewares from './middlewares';

export default function configureStore() {
  return createStore(
    rootReducer,
    middlewares,
  );
}
