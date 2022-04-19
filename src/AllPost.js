import React, { useEffect } from 'react'
import { Col, Card, Row, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AllPost = () => {
  const { posts, loading, error } = useSelector((state) => state.allPost)

  return (
    <Row>
      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
        <>
          {posts.map((item, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Link as={Link} to={item.id.toString()}>
                    show Post
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </>
      )}
    </Row>
  )
}

export default AllPost
