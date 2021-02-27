import React from "react";

function Footer3() {
  return (
    <div className="contact__3">
      <h6>GỬI EMAIL</h6>
      <p>Gửi email cho chúng tôi để được hỗ trợ</p>
      <form>
        <input type="text" placeholder="Enter your email" />
        <button>GỬI</button>
        <div className="arrow-right"></div>
      </form>
      <a href="./">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="./">
        <i className="fa fa-google-plus"></i>
      </a>
      <a href="./">
        <i className="fa fa-dribbble"></i>
      </a>
      <a href="./">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="./">
        <i className="fa fa-rss"></i>
      </a>
    </div>
  );
}

export default Footer3;
