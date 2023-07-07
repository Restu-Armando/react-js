import React from "react";

// import section
import Banner from "../component/Banner";
import Profile from "../component/Profile";
import Achivement from "../component/Achivement";
import Service from "../component/Service";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <Profile></Profile>
      <Achivement></Achivement>
      <Service></Service>
    </>
  );
};

export default HomePage;
