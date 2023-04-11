import React from "react";
import './tags-style.scss';

const StyledTag = (props) => {

    const content = props.content;

    return(
        <div className="skills-button">{content}</div>
    )
}

export default StyledTag;