import React, { useEffect } from 'react'
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getUsers } from './action'
import { Link } from 'react-router-dom'

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { posts } = useSelector((state) => state.allPost)
  const { users } = useSelector((state) => state.allUsers)

  useEffect(() => {
    if (!posts.length) {
      dispatch(getAllPosts())
    } else {
      return
    }
  }, [])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container>
      <Row>
        {users.map((item, index) => (
          <Col key={index}>
            <Card
              bg={variants[Math.floor(Math.random() * 8)]}
              key={index}
              style={{ width: '18rem' }}
              className='mb-2'
            >
              <Card.Body>
                <Card.Title>{item.username}</Card.Title>
                <Card.Text>
                  <span>{item.address.street}</span> {item.address.city}{' '}
                  {item.address.suite} {item.address.zipcode}
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>{item.name}</ListGroupItem>
                <ListGroupItem>{item.email}</ListGroupItem>
                <ListGroupItem>{item.website}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link as={Link} to={`${item.id}/posts`}>
                  Posts
                </Card.Link>
              </Card.Body>
            </Card>{' '}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HomeScreen
