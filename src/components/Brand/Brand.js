import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BrandStyled = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.iconFill};
    color :  ${({ theme }) => theme.iconFill};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    text-transform : lowercase;
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
}

export default Brand;