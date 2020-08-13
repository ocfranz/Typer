const requestFocus = (event) =>{
    if(event.target instanceof Element){
        event.target.children[0].focus();
    }
}

export default requestFocus;
