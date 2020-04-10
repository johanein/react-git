import React, { memo } from 'react'

const Posts = memo(({jsonAxiosGetResult})=> {
    return (
        <ol>      
{jsonAxiosGetResult.map((ele)=><li key={ele.id}><b>{ele.title}</b></li>)}      
      </ol>
    )
})

Posts.propTypes = {

}

export default Posts
