import React from "react";
import "./NewAndBlogItem.scss";

const NewAndBlogItem = ({ src }) => {
  return (
    <div className="news">
      <div className="news__wrapper ">
        <img src={src} alt="img" />
        <div className="popup ">
          <div className="circle">
            <i className="fa fa-link"></i>
          </div>
        </div>
      </div>
      <div className="news__content">
        <h5>VANG THĂNG LONG CLASSIC</h5>
        <span>Đăng bởi Giang Lê | 06/06/2016 | 60 bình luận</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero
          assumenda accusamus numquam voluptas amet doloremque reprehenderit
          iste natus excepturi.
        </p>
        <a href="./">Read more</a>
      </div>
    </div>
  );
};

export default NewAndBlogItem;
