import React, { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
const emailPattern = ''
const LoginScreen = () => {
  const [first, setfirst] = useState('')
  const [show, setShow] = useState(false)
  console.log(first)
  const submitHnadler = (event) => {
    event.preventDefault()
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  }
  return (
    <Container>
      <Row>
        <Col xs={{ offset: 4, span: 5 }}>
          <Form onSubmit={submitHnadler}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter email'
                onChange={(e) => {
                  setfirst(e.target.value)
                  setShow(false)
                }}
                isInvalid={show}
                // isValid={}
              />
              {/* <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text> */}
              <Form.Control.Feedback type='invalid'>
                input your email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
