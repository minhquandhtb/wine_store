import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Col, Container, FormGroup, Row } from "reactstrap";
import * as Yup from "yup";
import InputField from "custom-fields/InputField";
import Button from "components/Button/Button";
import CheckboxField from "custom-fields/CheckboxField/CheckboxField";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: null,
};

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
    forget: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Vui lòng không bỏ trống.")
      .email("Email phải có kí tự @"),
    password: Yup.string()
      .required("Vui lòng không bỏ trống.")
      .min(8, "Mật khẩu có ít nhất 8 kí tự"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formikProps) => {
        //const { values, errors, touched, isSubmitting } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form>
            <h5>KHÁCH HÀNG ĐĂNG NHẬP</h5>
            <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
            <br />
            <FastField
              name="email"
              component={InputField}
              label="Email*"
              placeholder="minhquan@gmail.com"
            />
            <FastField
              name="password"
              component={InputField}
              type="password"
              label="Password*"
            />
            <FastField
              name="forget"
              component={CheckboxField}
              label="Quên mật khẩu"
            />
            <Container>
              <Row>
                <Col xs="2"></Col>
                <Col xs="10">
                  <FormGroup>
                    <div className="wrapper-btn">
                      <Button type="submit" color="black" text="ĐĂNG NHẬP" />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
