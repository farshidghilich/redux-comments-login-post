import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOnePosts } from './action'
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom'
import { Button, Card, Spinner } from 'react-bootstrap'

const OnePost = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { post, loading, error } = useSelector((state) => state.onePost)
  useEffect(() => {
    dispatch(getOnePosts(postId))
  }, [postId])

  return (
    <>
      <div>
        {loading ? (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          <Card>
            <Card.Header>{post.id}</Card.Header>
            <Card.Body>
              <Card.Title>{post.Title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button onClick={() => navigate(-1)} variant='primary'>
                Go back
              </Button>
              <Button variant='info' onClick={() => navigate('comments')}>
                Comments
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
      <Outlet />
    </>
  )
}

export default OnePost
