import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BrandStyled = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background-color: ${ 'gray' || props.bgColor};
    color : ${ '#000000' || props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 22px;
    cursor : pointer !important;
`;

const Brand = ({children, handleOnClick}) => {
    return(
        <BrandStyled onClick={handleOnClick}>
            { children }
        </BrandStyled>
    );    
}


Brand.defaultProps = {
    children : "T"
}

Brand.propTypes = {
    children : PropTypes.string,
    handleOnClick : PropTypes.func.isRequired
}

export default Brand;