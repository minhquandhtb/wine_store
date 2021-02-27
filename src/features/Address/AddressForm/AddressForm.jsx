import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Col, Container, FormGroup, Row } from "reactstrap";
import * as Yup from "yup";
import InputField from "custom-fields/InputField";
import Button from "components/Button/Button";
import CheckboxField from "custom-fields/CheckboxField/CheckboxField";

AddressForm.propTypes = {
  onSubmit: PropTypes.func,
};

AddressForm.defaultProps = {
  onSubmit: null,
};

function AddressForm() {
  const initialValues = {
    fname: "",
    lname: "",
    company: "",
    address: "",
    city: "",
    country: "",
    code: "",
    phone: "",
    check: false,
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Vui lòng không bỏ trống."),
    lname: Yup.string().required("Vui lòng không bỏ trống."),
    company: Yup.string().required("Vui lòng không bỏ trống."),
    address: Yup.string().required("Vui lòng không bỏ trống."),
    city: Yup.string().required("Vui lòng không bỏ trống."),
    country: Yup.string().required("Vui lòng không bỏ trống."),
    code: Yup.number()
      .typeError("Nhập số.")
      .required("Vui lòng không bỏ trống."),
    phone: Yup.number()
      .typeError("Số điện thoại phải là số.")
      .required("Vui lòng không bỏ trống."),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formikProps) => {
        //const { values, errors, touched, isSubmitting } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form>
            <h5>ĐỊA CHỈ CỦA BẠN</h5>
            <br />
            <FastField
              name="fname"
              component={InputField}
              label="Họ"
              placeholder="Nguyễn"
            />
            <FastField
              name="lname"
              component={InputField}
              label="Tên"
              placeholder="Minh Quân"
            />
            <FastField
              name="company"
              component={InputField}
              label="Công ty"
              placeholder="Cổ phần công nghệ DKT"
            />
            <FastField
              name="address"
              component={InputField}
              label="Địa chỉ"
              placeholder="Hà Nội"
            />
            <FastField
              name="city"
              component={InputField}
              label="Thành phố"
              placeholder="Hà Nội"
            />
            <FastField
              name="country"
              component={InputField}
              label="Quốc tịch"
              placeholder="Việt Nam"
            />
            <FastField
              name="code"
              component={InputField}
              label="Post/ Zip Code"
              placeholder="154526656"
            />
            <FastField
              name="phone"
              component={InputField}
              label="Số điện thoại"
              placeholder="0123456789"
            />
            <FastField
              name="check"
              component={CheckboxField}
              label="Đặt làm địa chỉ mặc định"
            />
            <Container>
              <Row>
                <Col xs="2"></Col>
                <Col xs="10">
                  <FormGroup>
                    <div className="wrapper-btn">
                      <Button
                        type="submit"
                        color="blue"
                        text="Chỉnh sửa địa chỉ"
                      />
                      <Button type="button" color="black" text="Xóa" />
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

export default AddressForm;
