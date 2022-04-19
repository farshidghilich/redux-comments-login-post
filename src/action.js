import axios from 'axios'
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
export const getAllPosts = () => async (dispatch) => {
  const body = { username: 'ali' }
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    dispatch({ type: ALL_POST_REQUEST })
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    localStorage.setItem('posts', JSON.stringify(data))
    dispatch({ type: ALL_POST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ALL_POST_FAILED, payload: error })
  }
}
export const getOnePosts = (postId) => async (dispatch) => {
  try {
    dispatch({ type: ONE_POST_REQUEST })
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    dispatch({ type: ONE_POST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ONE_POST_FAILED, payload: error })
  }
}

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch({ type: ALL_COMMENTS_REQUEST })

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )

    dispatch({ type: ALL_COMMENTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ALL_COMMENTS_FAILED, payload: error })
  }
}
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST })

    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    dispatch({ type: ALL_USERS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ALL_USERS_FAILED, payload: error })
  }
}
