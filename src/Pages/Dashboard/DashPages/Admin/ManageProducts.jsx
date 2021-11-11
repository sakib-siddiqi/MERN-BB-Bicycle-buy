import React from 'react';
import { Table, Button } from 'react-bootstrap';
import DashBoardContent from '../../DashBoardContent';
import DashTitle from '../../DashTitle';
const ManageProducts = () => {
    return (
        <section>
            <DashTitle bg="#E4FBFF" text="ligth">Manage Products</DashTitle>
            <DashBoardContent className="my-4">
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>UID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><Button variant="danger" size="sm">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </DashBoardContent>
        </section>
    );
};

export default ManageProducts;