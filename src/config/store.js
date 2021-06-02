import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger/src";
import reducers from "../reducers";
import createSagaMiddleWare from "redux-saga";
import sagas from "../sagas";

const sagaMiddleWare = createSagaMiddleWare();

const middlewareList = [sagaMiddleWare];
if (process.env.NODE_ENV === "development") {
  middlewareList.push(createLogger());
}

const str = createStore(reducers, applyMiddleware(...middlewareList));

sagaMiddleWare.run(sagas);
export const store = str;
