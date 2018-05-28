import React from "react";

const Picture = props =>

    <div className="picContainer">
        <img src={props.source} alt={props.alt} className="image image-fluid" />
        <div className="overlay">
            <div className="text">
            <a href={props.github} target="_blank">Github</a>
            <a href={props.deployed} target="_blank">Deployed Site</a>
            </div>
        </div>
    </div>

export default Picture;