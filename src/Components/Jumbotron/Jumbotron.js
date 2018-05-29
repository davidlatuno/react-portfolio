import React from "react";

const Jumbotron = props =>

    <div className="jumbotron text-center">
        <h1 className="display-4 jumbotronMain">{props.phrase}</h1>
        <p className="lead">{props.subtitle}</p>
    </div>

export default Jumbotron;