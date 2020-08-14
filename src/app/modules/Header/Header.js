import React, { useState } from 'react';
import styled from 'styled-components';

import { media } from '../../styles/minxins';
import HeaderStyled from './HeaderStyled';
import HeaderWrapper from './HeaderWrapper';
import Brand from '../../components/Brand';
import ThemeIcon from '../../components/ThemeIcon';

import MoonIcon from './MoonOutline.js';
import SunIcon from './SunOutline.js';
import {lightTheme, darkTheme} from '../../styles/themes.js';

const Header = ({onClickToogleTheme})=>{
    const [ darkActive, setDarkActive ] = useState(false);
    
    const handleOnSwitchTheme = ()=>{
        setDarkActive(!darkActive);
        onClickToogleTheme();
    }
    return(
        <HeaderStyled>
            <HeaderWrapper>
                <Brand ></Brand>
                <ThemeIcon  handleOnClick={handleOnSwitchTheme} 
                children={darkActive ? <MoonIcon color={darkTheme.iconFill} /> : <SunIcon color={lightTheme.iconFill}/>} 
                />
            </HeaderWrapper>
        </HeaderStyled>
    )
}

export default Header;