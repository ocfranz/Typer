import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThemeIconStyled = styled.a`
    width : 30px;
    height : 30px;
    cursor : pointer;
`;

const ThemeIcon = ({handleOnClick, children})=>{
    
    return(
        <ThemeIconStyled onClick={handleOnClick}>
           {children}
        </ThemeIconStyled>
    );
}
ThemeIcon.propTypes = {
    handleOnClick : PropTypes.func,
    children : PropTypes.any
}

export default ThemeIcon;
