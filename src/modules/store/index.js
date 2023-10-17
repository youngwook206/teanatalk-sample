import { createStore, applyMiddleware } from 'redux';
import rootReducer, { rootSaga } from 'modules/reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
