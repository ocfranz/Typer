const getTextFromEditable = (editable)=>{

    return editable.replace(/<[^>]+>/g, '');

}

export default getTextFromEditable;