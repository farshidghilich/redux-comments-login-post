import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Col, Row } from 'react-bootstrap'
const UserPosts = () => {
  const { userId } = useParams()
  console.log(userId)
  const { posts } = useSelector((state) => state.allPost)
  return (
    <Row>
      {posts
        .filter((item, index) => item.userId == userId)
        .map((item, index) => (
          <Col key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Link as={Link} to={`${item.id.toString()}/comments`}>
                  Comments
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default UserPosts
