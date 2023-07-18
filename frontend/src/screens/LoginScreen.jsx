import { React } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {
    return (
        <Card>
            <Card.Header as="h5">Login</Card.Header>
            <FormContainer>

                <Form>
                    <Form.Group className='my-2' controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary' className='my-2'>
                        Login
                    </Button>
                </Form>
            </FormContainer>
        </Card>
    )
}

export default LoginScreen