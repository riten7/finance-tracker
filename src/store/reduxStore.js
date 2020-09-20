import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'tracker-app',
  storage,
}

const isDevMode = process.env.NODE_ENV !== "production";
const middlewares = [];

const persistedReducer = persistReducer(persistConfig, rootReducer)

if (isDevMode) {
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger());
}

export default function configureStore() {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  let persistor = persistStore(store)
  return { store, persistor }
}