import {compose, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import wordsRedux from './wordsRedux';
import imagesRedux from './imagesRedux';

const subreducers = {
  words: wordsRedux,
  images: imagesRedux
}

const reducer = combineReducers(subreducers)

const store = createStore(
  reducer,
  initialState,
  
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

export default store;