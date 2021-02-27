import Title from "components/Title/Title";
import React from "react";
import "./Customer.scss";
import src1 from "assets/images/customer-circle.png";
import src2 from "assets/images/customer-avatar.png";

function Customer() {
  return (
    <div className="customer">
      <Title title="KHÁCH HÀNG" />
      <div className="comtent">
        <img src={src1} alt="img" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit, obcaecati.
        </p>
        <p>Read more</p>
      </div>
      <img src={src2} alt="img" />
      <div className="name">
        <p>GIANG LT</p>
        <p>Graphic Design</p>
      </div>
    </div>
  );
}

export default Customer;
