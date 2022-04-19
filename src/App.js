import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import HomeScreen from './HomeScreen'
import PostsScreen from './PostsScreen'
import AllPost from './AllPost'
import OnePost from './OnePost'
import Comments from './Comments'
import UserPosts from './UserPosts'
import LoginScreen from './LoginScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route index element={<HomeScreen />} />
        <Route path=':userId/posts'>
          <Route index element={<UserPosts />}></Route>
          <Route path=':postId/comments' element={<Comments />} />
        </Route>
        <Route path='posts' element={<PostsScreen />}>
          <Route index element={<AllPost />}></Route>
          <Route path=':postId'>
            <Route index element={<OnePost />} />
            <Route path='comments' element={<Comments />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
