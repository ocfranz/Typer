import React, { useState } from "react";
import { HomeStyled } from "./styles";
import Notebook from "../../modules/Notebook";
import Header from "../../modules/Header";

const Home = ({}) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
      <>
        <HomeStyled>
          <Header onClickToggleTheme={handleToggleTheme}></Header>
          <Notebook></Notebook>
        </HomeStyled>
      </>
  );
};

export default Home;
