// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Designer from './Designer/Designer'
import objectInit from './Designer/designerObject'
 
const Home = () => {

    const [objects, setobjects] = useState(objectInit)

    const handleUpdate=(objects)=>{
        setobjects(objects)
      }

    return (
        <div className='Home'>
        <h2 >Home</h2>
        <Designer
        width={1400} height={750}
        objects={objects}
        onUpdate={handleUpdate}
        />
        </div>
    );
}
 
export default React.memo(Home);