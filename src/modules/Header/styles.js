import styled from "styled-components";
import { media } from "../../styles/minxins";

const HeaderStyled = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0px 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px ${media.sm`
            margin: 0px 100px;
        `} ${media.md`
            margin: 0px 220px;
        `};
`;

export { HeaderWrapper, HeaderStyled };
