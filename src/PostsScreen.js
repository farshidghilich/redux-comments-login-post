import React, { useEffect } from 'react'
import { getAllPosts } from './action'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const PostsScreen = () => {
  const dispatch = useDispatch()

  const { posts } = useSelector((state) => state.allPost)

  useEffect(() => {
    if (!posts.length) {
      dispatch(getAllPosts())
    } else {
      return
    }
  }, [])

  useEffect(() => {
    console.log('inside effect')

    return () => {
      console.log('inside clear')
    }
  }, [])

  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default PostsScreen
