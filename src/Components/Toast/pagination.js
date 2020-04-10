import React, { memo } from 'react'
import  styles  from './toast.module.css'

const Pagination = memo(({postsPerPage,totalPosts,paginate})=>{
    const pageNumbers = []
    for (let index = 1; index <= Math.ceil(totalPosts/postsPerPage); index++) {
        pageNumbers.push(index)    
}

    return (
        <nav>
            <ul id={styles.paginationstyle}>
            {pageNumbers.map(number=>(
                    <li key={number}><span id={styles.spanStyle} onClick={()=>paginate(number)}>
                        {number}
                    </span></li>
            )
            )}
            </ul>
            
        </nav>
    )
})

export default Pagination
