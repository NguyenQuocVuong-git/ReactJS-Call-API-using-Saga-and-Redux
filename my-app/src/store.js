import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {mySaga} from './sagas/index'

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)

export default store;
