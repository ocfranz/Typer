import styled from "styled-components";

import { media } from "../../styles/minxins";
const NotebookStyled = styled.div`
  max-width: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  margin-top: 15px;
`;
const NotebookWrapper = styled.div`
  margin: 0px 15px;
  ${media.sm`
            margin: 0px 100px;
        `}
  ${media.md`
            margin: 0px 220px;
        `}
`;

export { NotebookStyled, NotebookWrapper };
