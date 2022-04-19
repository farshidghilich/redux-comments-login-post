import {
  ALL_POST_FAILED,
  ALL_POST_SUCCESS,
  ALL_POST_REQUEST,
  ONE_POST_FAILED,
  ONE_POST_SUCCESS,
  ONE_POST_REQUEST,
  ALL_COMMENTS_REQUEST,
  ALL_COMMENTS_SUCCESS,
  ALL_COMMENTS_FAILED,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILED,
} from './constants'

export const allPostReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POST_REQUEST:
      return { loading: true, ...state }
    case ALL_POST_SUCCESS:
      return { loading: false, posts: action.payload }
    case ALL_POST_FAILED:
      return { ...state, loading: false, error: action.payload }

    default:
      return { ...state }
  }
}

export const onePostReducer = (
  state = { loading: false, post: {} },
  action
) => {
  switch (action.type) {
    case ONE_POST_REQUEST:
      return { loading: true }
    case ONE_POST_SUCCESS:
      return { loading: false, post: action.payload }
    case ONE_POST_FAILED:
      return { loading: false, error: action.payload }
    default:
      return { ...state }
  }
}

export const commentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case ALL_COMMENTS_REQUEST:
      return { ...state, loading: true }
    case ALL_COMMENTS_SUCCESS:
      return { loading: false, comments: action.payload }

    case ALL_COMMENTS_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
export const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return { ...state, loading: true }
    case ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload }

    case ALL_USERS_FAILED:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
