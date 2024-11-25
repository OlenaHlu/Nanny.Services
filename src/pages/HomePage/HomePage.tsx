import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <Wrapper>
        <div className={css.header}>
          <Header />
        </div>
        <p className={css.text}></p>
      </Wrapper>
    </div>
  );
};

export default HomePage;
