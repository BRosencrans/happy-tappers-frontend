import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(){
    const [index, setIndex]  = useState(0);
    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex)
    };
    return(
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item >
                <img id="penguin" alt="penguin" src={require("../images/bird1.png")} style={{ width: 250, height: 250 }} ></img>
            </Carousel.Item>
            <Carousel.Item>
                <img id="penguin" alt="parrot" src={require("../images/bird2.png")} style={{ width: 250, height: 250 }}></img>
            </Carousel.Item>
            <Carousel.Item>
                <img id="penguin" alt="chick" src={require("../images/bird3.png")} style={{ width: 250, height: 250 }}></img>
            </Carousel.Item>
            <Carousel.Item>
                <img id="penguin" alt="parrot 2" src={require("../images/bird4.png")} style={{ width: 250, height: 250 }}></img>
            </Carousel.Item>
        </Carousel>
    )
}

export default ControlledCarousel;