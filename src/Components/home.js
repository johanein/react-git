// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Designer from './Designer/Designer'
 
const Home = () => {

    const [objects, setobjects] = useState([{
        "width": 163,
        "height": 84,
        "rotate": 0,
        "strokeWidth": 0,
        "fill": "rgba(0, 123, 255, 1)",
        "radius": "0",
        "blendMode": "normal",
        "type": "rectangle",
        "x": 17,
        "y": 15
      }])

    const handleUpdate=(objects)=>{
        setobjects(objects)
      }

    return (
        <div className='Home'>
        <h2 >Home</h2>
        <Designer
        width={500} height={600}
        objects={objects}
        onUpdate={handleUpdate}/>
        </div>
    );
}
 
export default React.memo(Home);