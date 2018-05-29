import React from "react";
import IconImage from "../IconImage";

const Card = props =>

<div class="card">
  <IconImage source={props.source} alt={props.alt}/>
  <div class="card-body text-center">
    <p class="card-text">{props.text}</p>
  </div>
</div>

export default Card;