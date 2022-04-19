import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import {
  allPostReducer,
  onePostReducer,
  commentsReducer,
  usersReducer,
} from './reducer'

const reducers = combineReducers({
  allPost: allPostReducer,
  onePost: onePostReducer,
  allComments: commentsReducer,
  allUsers: usersReducer,
})

const posts = JSON.parse(localStorage.getItem('posts'))
  ? JSON.parse(localStorage.getItem('posts'))
  : []

const initialStates = {
  allPost: {
    posts,
  },
}
const middlewares = [thunk]
export const store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middlewares))
)
