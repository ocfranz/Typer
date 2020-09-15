import styled from 'styled-components';
import { media } from '../../styles/minxins';

const NotebookWrapper = styled.div`
    margin: 0px 15px;
    ${
        media.sm`
            margin: 0px 100px;
        `
    }
    ${
        media.md`
            margin: 0px 220px;
        `
    }
`;

export default NotebookWrapper;