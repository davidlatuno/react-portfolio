import React from "react";

const Picture = props =>

    <div class="picContainer">
        <img src={props.source} alt={props.alt} class="image" />
        <div class="overlay">
            <div class="text">Hello World</div>
        </div>
    </div>

export default Picture;