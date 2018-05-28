import React from "react";

const Picture = props =>

    <div class="picContainer">
        <img src={props.source} alt={props.alt} class="image" />
        <div class="overlay">
            <div class="text">
            <a href={props.github} target="_blank">Github</a>
            <a href={props.deployed} target="_blank">Deployed Site</a>
            </div>
        </div>
    </div>

export default Picture;