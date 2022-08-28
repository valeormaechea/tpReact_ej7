import React from "react";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import "./EmpleadoRow.css";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <ListGroup.Item className="listItem">
      <Container>
        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <EmpleadoAvatar src={props.empleado.image}></EmpleadoAvatar>
          </Col>
          <Col sm={8} className="columnaDetalles my-3 my-md-0">
            <h3 className="w-100 text-center">{props.empleado.fullName}</h3>
            <div className="rowDetalles">
              <p className="m-0">{props.empleado.title}</p>
              <Badge bg="info" className="ms-5 mb-0 p-2">
                {props.empleado.department}
              </Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
