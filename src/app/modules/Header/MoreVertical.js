import React from "react";
import PropTypes from 'prop-types';

const MoreVertical = ({size=25, color="#000000"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
    </svg>
);

MoreVertical.propTypes = {
    size : PropTypes.number,
    color : PropTypes.string
}
export default MoreVertical;