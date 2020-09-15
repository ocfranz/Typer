import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const CommandPaletteWrapper = styled.div`
  position: absolute;

  flex-direction: column;
  right: 100%;
  top: 0;
  margin: 4px 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 34px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 34px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 34px -4px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? "block" : "none")};
`;
const CommandPaletteItem = styled.div`
  height: 45px;
  width: 70px;
  text-align: center;
  cursor: pointer;
  font-weight: normal;
  font-size: ${(props) => {
    if (props.type === "text") return "18px";
    if (props.type === "heading") return "1.5em";
    return "1em";
  }};
`;

const CommandPalettes = ({}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(!visible);
      console.log("click outside");
    }
  };
  return (
    <CommandPaletteWrapper ref={ref} visible={visible}>
      <CommandPaletteItem type="text">Text</CommandPaletteItem>
      <CommandPaletteItem type="heading">H1</CommandPaletteItem>
      <CommandPaletteItem type="heading-two">H2</CommandPaletteItem>
      <CommandPaletteItem>H1</CommandPaletteItem>
    </CommandPaletteWrapper>
  );
};

export default CommandPalettes;
