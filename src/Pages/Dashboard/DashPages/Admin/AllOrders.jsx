import Dropdown from "@restart/ui/esm/Dropdown";
import React from "react";
import { DropdownButton, Table } from "react-bootstrap";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";

const AllOrders = () => {
    return (
        <section>
            <DashTitle bg="#B980F040" text="dark">
                Total 11 Orders
            </DashTitle>
            <DashBoardContent className="my-4">
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            {/* Status */}
                            <td>
                                <DropdownButton id="dropdown-basic-button" title="Status">
                                    <Dropdown.Item className="dropdown-item d-block" href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item d-block" href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item d-block" href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </DashBoardContent>
        </section>
    );
};

export default AllOrders;
