import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkaleton = () => {
    return (
        <Card className="border-1">
            <Card.Body>
                <Skeleton height={150} />
                <Skeleton height={40} />
                <Skeleton count={2} />
                <Skeleton height={40} width="50%" />
            </Card.Body>
        </Card>
    );
};

const LoginSignSkeleton = ({ item }) => {
    return (
        <Card.Body>
            {[...Array(item)].map((e, i) => (
                <div className="mb-3" key={i}>
                    <Skeleton height={30} width="35%" className="mb-1" />
                    <Skeleton height={50} />
                </div>
            ))}
            <Skeleton height={40} width="40%" className="mt-2" baseColor="#0000ff10" />
        </Card.Body>
    );
};
const TableSkeleton = ({ row, col }) => {
    return (
        <>{[...Array(row)].map((e, i) => (
            <Row className="mb-3" key={(i)}>
                {[...Array(col)].map((e, i) => (
                    <Col key={i}> <Skeleton height={30} className="mb-1" /></Col>
                ))}
            </Row>
        ))}
        </>
    );
};

export { CardSkaleton, LoginSignSkeleton, TableSkeleton };