import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { devToolsEnhancer } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';



const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



const composeEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  filter: filterReducer,
  contacts: contactReducer,
});


  export const store = createStore(rootReducer, composeEnhancers);
  export const persistor = persistStore(store);










