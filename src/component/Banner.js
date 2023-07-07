import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerImageUrl = process.env.PUBLIC_URL + "asset/image/banner-me.png";
  const handImageUrl = process.env.PUBLIC_URL + "asset/image/hand.png";
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="banner__content">
              <div className="section__heading">
                <h4>Web Development</h4>
                <h2>
                  Hey ! I am <img src={handImageUrl} alt="Hand" loading="lazy" />
                  <span className="color-red"> Restu Gusti Armando</span>
                </h2>
                <p>I have the ability to build an attractive and responsive website.</p>
                <Link to="/booking" className="banner__content-link">
                  Buy Me Coffe
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="banner__thumbnail">
              <img src={bannerImageUrl} alt="Banner" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
