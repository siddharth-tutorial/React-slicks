import React from "react";
import Header from "./header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <div className="container">
      <Header />
      <h1>carousel page</h1>
      <Slider {...settings}>
        <div className="car">
          <img src={require("./img/1.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
        <div className="car">
          <img src={require("./img/2.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
        <div className="car">
          <img src={require("./img/3.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
        <div className="car">
          <img src={require("./img/4.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
        <div className="car">
          <img src={require("./img/5.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
        <div className="car">
          <img src={require("./img/6.webp")} alt="cars" className="img-fluid" />
          <div className="card-body">
            <h3>Slick</h3>
            <p>We use react-slick</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default slick;
