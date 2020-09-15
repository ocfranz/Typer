import styled from 'styled-components';

const HeaderStyled = styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`;

export default HeaderStyled;