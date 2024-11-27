import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";
import LeftSide from "../../components/HomePageComponents/LeftSide/LeftSide";
import RightSide from "../../components/HomePageComponents/RightSide/RightSide";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <div className={css.wrapperContainer}>
        <Wrapper>
          <LeftSide />
          <RightSide />
        </Wrapper>
      </div>
    </>
  );
};

export default HomePage;
