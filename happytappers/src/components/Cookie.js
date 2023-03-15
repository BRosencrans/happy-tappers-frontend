import { React, useState} from 'react';
import '../components/css/Cookie.css'

const ProgressBar = () => {
    const [isIncrementing, setIsIncrementing] = useState( true );
    const [initialWidth, setInitialWidth] = useState( 20 );

    const changeWidth = () => {
        if ( isIncrementing ) setInitialWidth(oldWidth => oldWidth + 20);
        else setInitialWidth(oldWidth => oldWidth - 20);
        if(isIncrementing && initialWidth + 20 === 100) setIsIncrementing(false);
        if(!isIncrementing && initialWidth - 20 === 0) setIsIncrementing(true);
    }

    return (
        <div>
             <h3>Feed Me!</h3>
            <img src={require("../images/cookie.png")} style={{ width: 150, height: 100 }}>
            </img>
            <div className="progress-bar-wrapper" onClick={changeWidth}>
                <div className="progress-bar" style={{ width: `${initialWidth}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;




{/*export default function Cookie(){
    let [counter, setCount] = useState(0);
let [cookieSize, setCookieSize] = useState(10);
    const level = ({width, percent}) =>{
        let level = percent * width;
    }
    return(
        <div>
            <h3>Feed Me!</h3>
            <img src={require("../images/cookie.png")} style={{ width: 150, height: 100 }}>
            </img>
            <ProgressBar style={{width:`${level}%`}} className="progress" ></ProgressBar>
            {/*<ProgressBar className='progress' onProgress={cookieSize}>
            </ProgressBar>
        </div>
    ); 
    {/*function cookieClicked(props){
        setCount(counter +1);
        setCookieSize(cookieSize(1))
    }
*/}