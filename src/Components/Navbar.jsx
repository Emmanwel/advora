import React from "react";
import img from "../assets/images/nav-img.png";

export default function Navbar(props) {
  return (
    <div className="row nav-row">
      <div className="col-lg-1">Edvora</div>
      <div className="col-lg-7"></div>
      <div className="col-lg-3">
        {props.user.name}
        <img src={img} />
      </div>
    </div>
  );
}
