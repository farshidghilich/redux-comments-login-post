import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from './action'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Spinner, Col, Card, Button } from 'react-bootstrap'

const Comments = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const { comments, loading, error } = useSelector((state) => state.allComments)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getComments(postId))
  }, [postId])

  return (
    <>
      <Button variant='warning' onClick={() => navigate(-1)}>
        back
      </Button>
      <Row>
        {loading ? (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          <>
            {comments.map((item, index) => (
              <Col key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle>{item.email}</Card.Subtitle>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  )
}

export default Comments
