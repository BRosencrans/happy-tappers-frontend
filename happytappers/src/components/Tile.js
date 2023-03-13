import React from "react";

function Tile(props) {
    const id = "tiles" + props;
    return <div className="tile" key={props} id={id}></div>;
}

export default Tile;
