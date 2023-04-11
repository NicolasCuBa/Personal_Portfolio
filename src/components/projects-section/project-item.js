import React from "react";
import './project-item-styles.scss';

const ProjectItem = (props) => {
    const { name, description, image, icons, github, codepen } = props.project
    return (
        <div className="project-box">
            <div className="project-image-container">
                <div className="project-image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="project-info-container">
                <h1 className="project-name">{name}<hr className="title-line-2" /></h1>
                <div className="project-description">{description}</div>
                <div className="icon-container">
                    <div className="tools-box">
                        {icons.map((icon) => (
                            <div className={`${icon}`}></div>
                        ))}
                    </div>
                    <div className="links-container">
                        <a href={github} target="_blank"><div className="fa-brands fa-github"></div></a>
                        <a href={codepen} target="_blank"><div className="fa-brands fa-codepen"></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectItem;