import React from 'react'
import { Card, Row, Col, Button, Table, Form } from 'react-bootstrap';

const CashierScreen = () => {
    return (
        <>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>Patient Checkin</Card.Header>
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter firstName" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter lastName" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="nic">
                                        <Form.Label>NIC Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter NIC" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter phone number" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Doctor</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Dr. Doctor Name</option>
                                            <option>Dr. Doctor Name</option>
                                            <option>Dr. Doctor Name</option>
                                            <option>Dr. Doctor Name</option>
                                            <option>Dr. Doctor Name</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Header>Today's Appointments</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CashierScreen