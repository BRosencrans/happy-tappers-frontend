import React from 'react';

export default function Timer(){
    const [counter, setCounter] = React.useState(60);

    React.useEffect(() =>{
        const timer =
        counter > 0 && setInterval(() => setCounter(counter-1),1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="timer">
            <div>
                Time left: {counter}
            </div>
        </div>
    );
}
