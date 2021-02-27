import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Container, Col, Row, Label } from "reactstrap";
import "./CheckboxField.scss";

const CheckboxField = ({ field, label }) => {
  const { name } = field;

  return (
    <FormGroup>
      <Container>
        <Row className="align-items-center">
          <Col xs="2"></Col>
          <Col xs="10">
            <div className="checkbox-field">
              <input id={name} {...field} type="checkbox" />
              <Label for={name}>{label}</Label>
            </div>
          </Col>
        </Row>
      </Container>
    </FormGroup>
  );
};

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
};

CheckboxField.defaultProps = {
  label: "",
};

export default CheckboxField;
