import PropTypes from "prop-types";
import React from "react";
import {
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Container,
  Col,
  Row,
} from "reactstrap";
import { ErrorMessage } from "formik";

const InputField = ({ field, form, type, label, placeholder, disabled }) => {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      <Container>
        <Row className="align-items-center">
          <Col xs="2">{label && <Label for={name}>{label}</Label>}</Col>
          <Col xs="10">
            <Input
              id={name}
              {...field}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />
          </Col>
        </Row>
      </Container>
    </FormGroup>
  );
};

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
