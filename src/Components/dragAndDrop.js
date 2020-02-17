import React from 'react';
import styles from '../drag.module.css'
 import bg from '../bg.jpg'
 import Emt from '../EMTab_background.jpg'
const DragAndDrop = () => {

const dragStart = (e) =>{
    const target = e.target
e.dataTransfer.setData('img',target.id)

setTimeout(()=>{
target.style.display= 'none'
},0)
}

const dragOver =(e)=>{
    e.preventDefault()
}

const dragOverImg =(e)=>{
    e.stopPropagation()
}


const drop =(e) =>{
e.preventDefault()
const imageId = e.dataTransfer.getData('img')
const img  = document.getElementById(imageId)
img.style.display = 'block'
e.target.appendChild(img)
}

    return (
        <div className={styles.dragBox} >
            <div 
            id={styles.box1}
            onDrop={drop} 
            onDragOver={dragOver}
            >
                <img 
        id={styles.img1}
        src={Emt}
        draggable
        onDragStart={dragStart}
        alt='imageHere'
        onDragOver={dragOverImg}
        />
            </div>
            <div 
            id={styles.box2}
            onDrop={drop} 
            onDragOver={dragOver}
            >
        <img 
        id={styles.img2}
        src={bg}
        draggable
        onDragStart={dragStart}
        alt='imageHere'
        onDragOver={dragOverImg}
        />
        </div>
        </div>
    );
}
 
export default DragAndDrop;