import styled from "styled-components";

const BrandStyled = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.iconFill};
  color: ${({ theme }) => theme.iconFill};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  text-transform: lowercase;
  cursor: pointer !important;
`;

export { BrandStyled };
