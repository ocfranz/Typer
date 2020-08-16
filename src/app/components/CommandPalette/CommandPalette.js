import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled , { css } from 'styled-components';

const CommandPaletteWrapper = styled.div`
    position : absolute;
    
    flex-direction: column;
    right: 100%;
    top: 0;
    margin: 4px 10px;
    border-radius : 5px;
    -webkit-box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 34px -4px rgba(0,0,0,0.2);

    ${props => 
        props.visible == true && css`
            display : block;
        `
    }
    ${props => 
        props.visible == false && css`
            display : none;
        `
    }
`;
const CommandPaletteItem = styled.div`
    height: 45px;
    width: 70px;
    text-align: center;
    cursor : pointer;
    ${props => 
        props.type == "text" && css`
            font-weight: normal;
            font-size: 18px;
        `
    }
    ${props => 
        props.type == "heading" && css`
            font-size: 1.5em;
        `
    }
    ${props => 
        props.type == "heading-two" && css`
            font-size: 1em;
        `
    }
`;

const CommandPalettes = ({})=>{
    const [ visible, setVisible ] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true );
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    })

    const handleClickOutside = (event)=>{
        
        if(ref.current && !ref.current.contains(event.target)){
            setVisible(!visible);
            console.log('click outside')
            
        }
    }
    return(
        <CommandPaletteWrapper ref={ref} visible={visible}>
            <CommandPaletteItem type="text">Text</CommandPaletteItem>
            <CommandPaletteItem type="heading">H1</CommandPaletteItem>
            <CommandPaletteItem type="heading-two">H2</CommandPaletteItem>
            <CommandPaletteItem>H1</CommandPaletteItem>
        </CommandPaletteWrapper>
    )
}

export default CommandPalettes;