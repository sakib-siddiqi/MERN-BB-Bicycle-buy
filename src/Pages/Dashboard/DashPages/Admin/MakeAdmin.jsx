import React from 'react';
import { Card, Col, Row, Button, Table } from 'react-bootstrap';
import DashBoardContent from '../../DashBoardContent';
import DashTitle from '../../DashTitle';
import { RiUserSettingsFill, RiUserFill } from "react-icons/ri";
const MakeAdmin = () => {
    return (
        <section>
            <DashTitle bg="#333" text="light">
                Manage Users
            </DashTitle>
            <DashBoardContent className="my-4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="hoverBlueOutline">
                            <Card.Body>
                                <Card.Header className="fw-md text-center h5 mb-3 center"><RiUserSettingsFill />Admins</Card.Header>
                                <Table striped bordered hover responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td><Button variant="primary" size="sm">Make User</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="hoverBlueOutline">
                            <Card.Body>
                                <Card.Header className="fw-md text-center h5 mb-3 center"><RiUserFill />Users</Card.Header>
                                <Table striped bordered hover responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td><Button variant="danger" size="sm">Make Admin</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </DashBoardContent>
        </section>
    );
};

export default MakeAdmin;