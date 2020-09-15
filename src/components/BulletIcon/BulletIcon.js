import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BulletIconStyled = styled.div`
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-right: 0.5rem;
`;

const BulletIcon = ()=>{
    return(
        <BulletIconStyled>•</BulletIconStyled>
    );
}

export default BulletIcon;