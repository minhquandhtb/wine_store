import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormGroup } from "reactstrap";
import * as Yup from "yup";
import InputField from "custom-fields/InputField";
import Button from "components/Button/Button";
import CheckboxField from "custom-fields/CheckboxField/CheckboxField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm() {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    repassword: "",
    check: false,
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Vui lòng không bỏ trống."),
    lname: Yup.string().required("Vui lòng không bỏ trống."),
    email: Yup.string()
      .required("Vui lòng không bỏ trống.")
      .email("Email phải có kí tự @"),
    phone: Yup.number()
      .typeError("Số điện thoại phải là số.")
      .required("Vui lòng không bỏ trống."),
    password: Yup.string()
      .required("Vui lòng không bỏ trống.")
      .min(8, "Mật khẩu có ít nhất 8 kí tự"),
    repassword: Yup.string()
      .required("Vui lòng không bỏ trống.")
      .min(8, "Mật khẩu có ít nhất 8 kí tự")
      .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formikProps) => {
        //const { values, errors, touched, isSubmitting } = formikProps;
        //console.log({ values, errors, touched });
        return (
          <Form>
            <h5>THÔNG TIN CÁ NHÂN</h5>
            <br />
            <FastField
              name="fname"
              component={InputField}
              label="Họ*"
              placeholder="Nguyễn"
            />
            <FastField
              name="lname"
              component={InputField}
              label="Tên*"
              placeholder="Minh Quân"
            />
            <FastField
              name="email"
              component={InputField}
              label="Email*"
              placeholder="minhquan@gmail.com"
            />
            <FastField
              name="phone"
              component={InputField}
              label="Số điện thoại*"
              placeholder="0123456789"
            />
            <FastField
              name="check"
              component={CheckboxField}
              label="Đăng ký nhận bản tin"
            />
            <h5>THÔNG TIN ĐĂNG NHẬP</h5>
            <br />
            <FastField
              name="password"
              component={InputField}
              type="password"
              label="Mật khẩu*"
            />
            <FastField
              name="repassword"
              component={InputField}
              type="password"
              label="Nhập lại mật khẩu*"
            />
            <FormGroup>
              <div className="wrapper-btn">
                <Button
                  type="submit"
                  color="black"
                  text="GỬI"
                  onClick={() => alert("đăng kí thành công")}
                />
                <Button type="button" color="black" text="QUAY LẠI" />
              </div>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
