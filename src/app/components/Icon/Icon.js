import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconStyled = styled.a`
    width : 30px;
    height : 30px;
    cursor : pointer;
    margin : 0px 5px;
`;

const Icon = ({handleOnClick, children})=>{
    
    return(
        <IconStyled onClick={handleOnClick}>
           {children}
        </IconStyled>
    );
}
Icon.propTypes = {
    handleOnClick : PropTypes.func,
    children : PropTypes.any
}

export default Icon;
