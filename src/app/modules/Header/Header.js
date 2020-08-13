import React from 'react';
import styled from 'styled-components';

import { media } from '../../styles/minxins';
import HeaderStyled from './HeaderStyled';
import HeaderWrapper from './HeaderWrapper';
import Brand from '../../components/Brand';

const Header = ({onClickToogleTheme})=>{
    const handleBrandClick = ()=>{
        window.location.href = "/";
    }
    return(
        <HeaderStyled>
            <HeaderWrapper>
                <Brand ></Brand>
                <button onClick={onClickToogleTheme}>Change teme</button>
            </HeaderWrapper>
        </HeaderStyled>
    )
}

export default Header;