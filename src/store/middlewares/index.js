import { applyMiddleware } from 'redux';
import loggerMiddleware from './loggerMiddleware';

export default applyMiddleware(
  loggerMiddleware,
);
