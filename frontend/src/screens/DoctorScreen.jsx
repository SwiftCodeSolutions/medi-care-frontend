import React from 'react'
import { Card, Row, Col, Button, Table } from 'react-bootstrap';

const DoctorScreen = () => {
    return (
        <>
            <Row>
                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Doctoravatar.png" />
                        <Card.Body>
                            <Card.Title>Dr. Doctor Name</Card.Title>
                            <Card.Text> Doctor Spaciality </Card.Text>
                            <Button variant="danger">Logout</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={12}>
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
                    <hr />
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Header>Appointment History</Card.Header>
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
                </Col>
            </Row>
        </>
    )
}

export default DoctorScreen