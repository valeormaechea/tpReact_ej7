import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "./EmpleadoRow.css";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <ListGroup.Item className="listItem">
      <Container>
        <Row>
          <Col sm={4} className='d-flex justify-content-center'>
            <EmpleadoAvatar src={props.empleado.image}></EmpleadoAvatar>
          </Col>
          <Col sm={8}>sm=4</Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
