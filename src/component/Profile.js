import React from "react";
import ProfileTabPanel from "./ProfileTabPanel";

const Profile = () => {
  const profileImageUrl = process.env.PUBLIC_URL + "asset/image/about-us.png";

  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="profile__thumbnail">
              <img src={profileImageUrl} alt="People Profile" loading="lazy" />
              <div className="profile__experience">
                <h4>
                  <span> 2 Years </span>
                  <span>Of Experience</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="profile__content">
              <div className="section__heading">
                <h4>I'm a Developer </h4>
                <h2>
                  I Develop Ideas <span>That Help Many People</span>
                </h2>
                <p>Expert System Diagnose Pulpa</p>
              </div>
              <div className="section__body">
                <ProfileTabPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
