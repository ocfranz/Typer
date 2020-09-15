import React from "react";
import PropTypes from "prop-types";

import { BrandStyled } from "./styles";

const Brand = ({ children, handleOnClick }) => {
  return <BrandStyled onClick={handleOnClick}>{children}</BrandStyled>;
};

Brand.defaultProps = {
  children: "T",
};

Brand.propTypes = {
  children: PropTypes.string,
  handleOnClick: PropTypes.func,
};

export default Brand;
