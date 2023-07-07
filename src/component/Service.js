import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const serviceList = [
    {
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit est, maxime quod, porro architecto unde corrupti corporis tenetur rem explicabo hic possimus eaque, placeat laboriosam illum eligendi exercitationem dolorem accusamus.",
      image: process.env.PUBLIC_URL + "asset/image/service-icon1-one.png",
    },
    {
      title: "React JS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit est, maxime quod, porro architecto unde corrupti corporis tenetur rem explicabo hic possimus eaque, placeat laboriosam illum eligendi exercitationem dolorem accusamus.",
      image: process.env.PUBLIC_URL + "asset/image/service-icon2-one.png",
    },
    {
      title: "Quality Assurance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit est, maxime quod, porro architecto unde corrupti corporis tenetur rem explicabo hic possimus eaque, placeat laboriosam illum eligendi exercitationem dolorem accusamus.",
      image: process.env.PUBLIC_URL + "asset/image/service-icon3-one.png",
    },
  ];

  return (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="section__heading">
              <h4>My Service</h4>
              <h2>
                <span>Why I Provide To</span>
                <span>My Client</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae ullam blanditiis, quis exercitationem repellendus itaque veniam iusto ducimus temporibus velit, cum vero numquam laudantium officia tenetur ipsum corrupti
                unde?
              </p>
              <Link to="/service">View My Service</Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="service__list">
              {serviceList.map((item, index) => {
                return (
                  <div className="service__item">
                    <div className="service__item-icon">
                      <img src="" alt="" />
                    </div>
                    <div className="service__item-icon"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
