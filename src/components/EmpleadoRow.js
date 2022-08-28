import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import "./EmpleadoRow.css";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center px-3 py-2 listItem">
      <Row className="h-100">
        <Col sm={4} className="d-flex justify-content-center h-100">
          <EmpleadoAvatar src={props.empleado.image}></EmpleadoAvatar>
        </Col>
        <Col sm={8}>sm=4</Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
