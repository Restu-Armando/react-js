import React, { useState } from "react";

// const ProfileTabPanel = () => {
//   const [isTabActive1, setIsTabActive1] = useState(false);
//   const [isTabActive2, setIsTabActive2] = useState(false);
//   const [isTabActive3, setIsTabActive3] = useState(false);

//   const handleClick1 = () => {
//     if (!isTabActive1) {
//       setIsTabActive1(true);
//       setIsTabActive2(false);
//       setIsTabActive3(false);
//     }
//   };
//   const handleClick2 = () => {
//     if (!isTabActive1) {
//       setIsTabActive2(true);
//       setIsTabActive1(false);
//       setIsTabActive3(false);
//     }
//   };
//   const handleClick3 = () => {
//     if (!isTabActive1) {
//       setIsTabActive3(true);
//       setIsTabActive1(false);
//       setIsTabActive2(false);
//     }
//   };
const ProfileTabPanel = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    if (activeTab === 1) {
      return (
        <div className="active">
          <ul className="row">
            <li className="col-sm-6">
              <span>My Name : </span>
              <label>Restu Gusti Armando</label>
            </li>
            <li className="col-sm-6">
              <span>Phone Number </span>
              <label>+62 89620647811</label>
            </li>
            <li className="col-sm-6">
              <span>Email : </span>
              <label>restuarmando@gmail.com</label>
            </li>
            <li className="col-sm-6">
              <span>Address : </span>
              <label>Padang, West Sumatera</label>
            </li>
            <li className="col-sm-6">
              <span>Language : </span>
              <label>Indonesia, English</label>
            </li>
            <li className="col-sm-6">
              <span>My Nationality : </span>
              <label>Indonesia</label>
            </li>
          </ul>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div className="active">
          <ul className="row">
            <li className="col-sm-6">
              <span>2020: </span>
              <label>Gain Some.....</label>
            </li>
            <li className="col-sm-6">
              <span>2020: </span>
              <label>Lorem ipsum dolor sit amet.</label>
            </li>
            <li className="col-sm-6">
              <span>2020: </span>
              <label>restuarmando@gmail.com</label>
            </li>
            <li className="col-sm-6">
              <span>2021: </span>
              <label>Lorem ipsum dolor sit amet.</label>
            </li>
            <li className="col-sm-6">
              <span>2022: </span>
              <label>Lorem ipsum dolor sit amet.</label>
            </li>
            <li className="col-sm-6">
              <span>2023:</span>
              <label>Lorem, ipsum dolor.</label>
            </li>
          </ul>
        </div>
      );
    } else if (activeTab === 3) {
      return (
        <div className="active">
          <div className="skills__range">
            <h4>
              FrontEnd <span className="skills__range-percentage">90%</span>
            </h4>
            <span className="skills__range-bar" style={{ width: "95%" }}></span>
          </div>
          <div className="skills__range">
            <h4>
              React JS <span className="skills__range-percentage">30%</span>
            </h4>
            <span className="skills__range-bar" style={{ width: "30%" }}></span>
          </div>
          <div className="skills__range">
            <h4>
              BackEnd <span className="skills__range-percentage">50%</span>
            </h4>
            <span className="skills__range-bar" style={{ width: "50%" }}></span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="profile__tab-panel">
      <div className="tab-title">
        <ul>
          <li>
            <button className={activeTab === 1 ? "active" : ""} onClick={() => handleClick(1)}>
              My Details
            </button>
          </li>
          <li>
            <button className={activeTab === 2 ? "active" : ""} onClick={() => handleClick(2)}>
              My Awards
            </button>
          </li>
          <li>
            <button className={activeTab === 3 ? "active" : ""} onClick={() => handleClick(3)}>
              My Skills
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default ProfileTabPanel;
