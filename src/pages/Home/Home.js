import React, { useState } from "react";
import { HomeStyled } from "./styles";
import Notebook from "../../modules/Notebook";
import Header from "../../modules/Header";

const Home = ({}) => {
  return (
      <>
        <HomeStyled>
          <Header ></Header>
          <Notebook></Notebook>
        </HomeStyled>
      </>
  );
};

export default Home;
