import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const EditableWrapper = styled.div`
    padding: 1px 1px;
    ${props => 
        props.type == "heading" && css`
            padding : 2px 0px 2px 0px;
            font-size: 1.5em;
            font-weight: 700;
            line-height: 1.5em;
        `
    }
    ${props => 
        props.type == "heading-two" && css`
            padding : 2px 0px 2px 0px;
            font-size: 1em;
            font-weight: 700;
            line-height: 1.5em;
        `
    }
    ${props => 
        props.type == "bullet" && css`
            display: flex;
        `
    }
`;

EditableWrapper.defaultProps = {
    type : "paragraph"
}

EditableWrapper.propTypes = {
    type : PropTypes.string
}

export default EditableWrapper;