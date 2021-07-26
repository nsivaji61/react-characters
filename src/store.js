import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewareEnhancer = applyMiddleware(sagaMiddleware);
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(reducer, composedEnhancers);
	sagaMiddleware.run(saga);

  return store;
};

export default configureStore;
