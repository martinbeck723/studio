//build a counter
import React, { useState } from 'react';

function UseState() {
    const [count, setCount]=useState(0)
    console.log('UseState Render');
    return (
        <div>
            {/* setCount(count+1)  OR setCount(c=>c+1)*/}
            <button onClick={()=> setCount(count+1)}>Counter Click - {count}</button>
        </div>
    );
}

export default UseState;