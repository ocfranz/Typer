import React, { useState } from "react";

import Brand from "../../components/Brand";
import Icon from "../../components/Icon";
import { HeaderStyled, HeaderWrapper } from "./styles";
import MoonIcon from "./MoonOutline.js";
import SunIcon from "./SunOutline.js";
import MoreVerticalIcon from "./MoreVertical.js";
import { lightTheme, darkTheme } from "../../styles/themes.js";

const Header = ({ onClickToggleTheme }) => {
  const [darkActive, setDarkActive] = useState(false);

  const handleOnSwitchTheme = () => {
    setDarkActive(!darkActive);
    onClickToggleTheme();
  };
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Brand></Brand>
        <div>
          <Icon
            handleOnClick={handleOnSwitchTheme}
            children={
              darkActive ? (
                <MoonIcon color={darkTheme.iconFill} />
              ) : (
                <SunIcon color={lightTheme.iconFill} />
              )
            }
          />
          <Icon
            children={
              <MoreVerticalIcon
                color={darkActive ? darkTheme.iconFill : lightTheme.iconFill}
              />
            }
          />
        </div>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
