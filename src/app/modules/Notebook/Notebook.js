import React, {useEffect, useState, useRef } from 'react';
import { renderToString } from 'react-dom/server'

import Editable from '../../components/Editable';
import EditableWrapper from '../../components/EditableWrapper';
import NotebookStyled from './NotebookStyled';
import NotebookWrapper from './NotebookWrapper';
import BulletIcon from '../../components/BulletIcon';
import CommandPalette from '../../components/CommandPalette';
import requestFocus from '../../helpers/requestFocus';

const Notebook = ({})=>{
    const firstEditable = useRef(null);

    useEffect(()=>{
        firstEditable.current.focus();
    }, [])

    const handleEditableKeyDown = (event)=>{
        switch(event.keyCode) {
            case 13:
                event.preventDefault();
                const { target } = event;
                const lastChild = document.querySelector('#notebook').lastChild;
                let newLine = document.createElement('div');
                let addedComponent = null;
                const stringComponent = renderToString(<EditableWrapper >
                                                            <Editable  onKeyDown={(event)=>{handleEditableKeyDown(event)}}></Editable>
                                                        </EditableWrapper>);
                newLine.innerHTML = stringComponent;
                newLine.children[0].addEventListener('keydown', (event)=>handleEditableKeyDown(event));
                newLine.children[0].addEventListener('input', (event)=>handleEditableOnInput(event));
        
                if(target.parentNode.parentNode.addEventListener){
                    target.parentNode.parentNode.addEventListener('DOMNodeInserted',requestFocus, false);
                }
            
                if(target.parentNode == lastChild){
                    target.parentNode.parentNode.appendChild(newLine.children[0]);
                }else{
                    target.parentNode.parentNode.insertBefore(newLine.children[0], target.parentNode.nextSibling);   
                }
                target.parentNode.parentNode.removeEventListener('DOMNodeInserted', (event)=>{});
                break;
            case 8 :
                let {target} = event;
                if(target.innerText == ""){
                    if( document.querySelector('#notebook').firstChild.children[0] != event.target){
                        moveCursorToEnd(target.parentNode.previousSibling.children[0]);
                        target.parentNode.parentNode.removeChild(target.parentNode);
                    }
                }
                break;
            case 38 :
                if( document.querySelector('#notebook').firstChild.children[0] != event.target){
                    event.preventDefault();
                    moveCursorToEnd(event.target.parentNode.previousSibling.childNodes[0]);
                }
                break;  
                
            case 40 :
                if( document.querySelector('#notebook').lastChild.children[0] != event.target){
                    event.preventDefault();
                    moveCursorToEnd(event.target.parentNode.nextSibling.childNodes[0]);
                } 
                break;  
            default :
                throw new Error('Editable event handler');
        }
    }

    const moveCursorToEnd = (el)=>{
        if(el.innerText == ""){
            el.focus();
        }else{
            if(el.innerText && document.createRange){
            window.setTimeout(() =>
                {
                let selection = document.getSelection();
                let range = document.createRange();
        
                range.setStart(el.childNodes[0],el.innerText.length);
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);
                }
            ,1);
            }
        }
    }
    const handleEditableOnInput = (event)=>{
        const { target } = event;
        if(target.textContent == ":"){
            
        }

        if(target.textContent == ":h1"){
            const { target } = event;
            let newLine = document.createElement('div');
            const stringComponent = renderToString(<EditableWrapper type="heading">
                                                        <Editable  onKeyDown={(event)=>{handleEditableKeyDown(event)}} placeholder={"Title"}></Editable>
                                                    </EditableWrapper>);

            newLine.innerHTML = stringComponent;
            newLine.children[0].addEventListener('keydown', (event)=>handleEditableKeyDown(event));
            newLine.children[0].addEventListener('input', (event)=>handleEditableOnInput(event));
            
            event.target.parentNode.parentNode.insertBefore(newLine.children[0], target.parentNode.nextSibling);

            target.parentNode.parentNode.removeChild(target.parentNode);
        }
        if(target.textContent == ":h2"){
            const { target } = event;
            let newLine = document.createElement('div');
            const stringComponent = renderToString(<EditableWrapper type="heading-two">
                                                        <Editable  onKeyDown={(event)=>{handleEditableKeyDown(event)}} placeholder={"Subtitle"}></Editable>
                                                    </EditableWrapper>);

            newLine.innerHTML = stringComponent;
            newLine.children[0].addEventListener('keydown', (event)=>handleEditableKeyDown(event));
            newLine.children[0].addEventListener('input', (event)=>handleEditableOnInput(event));
            
            event.target.parentNode.parentNode.insertBefore(newLine.children[0], target.parentNode.nextSibling);

            target.parentNode.parentNode.removeChild(target.parentNode);
        }
        if(target.textContent == ":ul"){
            const { target } = event;
            let newLine = document.createElement('div');
            const stringComponent = renderToString(<EditableWrapper type="bullet">
                                                        <BulletIcon />
                                                        <Editable  onKeyDown={(event)=>{handleEditableKeyDown(event)}} placeholder={"Subtitle"}></Editable>
                                                    </EditableWrapper>);

            newLine.innerHTML = stringComponent;
            
            newLine.children[0].children[1].addEventListener('keydown', (event)=>handleEditableKeyDown(event));
            newLine.children[0].children[1].addEventListener('input', (event)=>handleEditableOnInput(event));
            
            event.target.parentNode.parentNode.insertBefore(newLine.children[0], target.parentNode.nextSibling);
            target.parentNode.parentNode.removeChild(target.parentNode);
        }
    }
    return(
        <NotebookStyled id="notebook">
            <NotebookWrapper>
                <EditableWrapper type="heading">
                    <Editable ref={firstEditable}   onKeyDown={(event)=>{handleEditableKeyDown(event)}}  onInput={(event) => {handleEditableOnInput(event)}} placeholder={"Title"}></Editable>
                </EditableWrapper>
            </NotebookWrapper>
        </NotebookStyled>
    );
}

export default Notebook;