import React, { useState } from 'react';
import styled from 'styled-components';

import { media } from '../../styles/minxins';
import HeaderStyled from './HeaderStyled';
import HeaderWrapper from './HeaderWrapper';
import Brand from '../../components/Brand';
import Icon from '../../components/Icon';

import MoonIcon from './MoonOutline.js';
import SunIcon from './SunOutline.js';
import MoreVerticalIcon from './MoreVertical.js';
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
                <div>
                    <Icon  handleOnClick={handleOnSwitchTheme} 
                    children={darkActive ? <MoonIcon color={darkTheme.iconFill} /> : <SunIcon color={lightTheme.iconFill}/>} 
                    />
                    <Icon children={<MoreVerticalIcon color={darkActive ? darkTheme.iconFill : lightTheme.iconFill }/>}/>
                </div>
            </HeaderWrapper>
        </HeaderStyled>
    )
}

export default Header;