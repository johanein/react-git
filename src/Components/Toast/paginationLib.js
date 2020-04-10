import React, { memo } from 'react'
import PaginationComponent from "react-js-pagination";
import  styles  from './toast.module.css'
require("bootstrap/less/bootstrap.less");

const Pagination = memo(({postsPerPage,totalPosts,paginate,currentPage})=> {
    return (
        <div  id={styles.paginationstyle} >
        <PaginationComponent
          activePage={currentPage}
          itemsCountPerPage={postsPerPage}
          totalItemsCount={totalPosts}
          pageRangeDisplayed={5}
          onChange={paginate}
        />
        </div>
    )
})
export default Pagination
