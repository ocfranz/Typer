import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brand from "../../components/Brand";
import Icon from "../../components/Icon";
import { TOGGLE_THEME } from "../../actions/types";
import { HeaderStyled, HeaderWrapper } from "./styles";
import MoonIcon from "./MoonOutline.js";
import SunIcon from "./SunOutline.js";
import MoreVerticalIcon from "./MoreVertical.js";
import { lightTheme, darkTheme } from "../../styles/themes.js";

const Header = (props) => {
  const theme = useSelector((state) => state.uiReducer.theme);
  const dispatch = useDispatch();
  const [darkActive, setDarkActive] = useState(theme === "light");
  const handleOnSwitchTheme = () => {
    setDarkActive(!darkActive);
    dispatch({ type: TOGGLE_THEME, action: darkActive ? "light" : "dark" });
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
