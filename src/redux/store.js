
import thunk from 'redux-thunk';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from './auth/slice';
import { contactReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';











const composeEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer());

export const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  contact: contactReducer,
});

export const store = createStore(rootReducer, composeEnhancers);
