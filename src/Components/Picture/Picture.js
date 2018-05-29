import React from "react";

const Picture = props =>

    <div className="picContainer">
        <img src={props.source} alt={props.alt} className="image image-fluid" />
        <div className="overlay">
            <div className={props.deployed ? "text textWithDeployed" : "text"}>
            <a href={props.github} target="_blank">Github</a>
            {props.deployed ? <a href={props.deployed} target="_blank">Deployed</a> : ""}
            
            </div>
        </div>
    </div>

export default Picture;