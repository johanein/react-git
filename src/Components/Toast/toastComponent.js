import React, { useState, useEffect, forwardRef }  from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Tippy from '@tippyjs/react';
import Posts from './posts'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
// import Pagination from './pagination'
import Pagination from './paginationLib'
import styles from './toast.module.css'
import { toastOpenActionCreator } from '../../Redux/actions/toastAction'
import { jsonPlaceholderGetReq, jsonPlaceholderCleanReq } from '../../Redux/actions/jsonPlaceHolderAction'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ToastComponent = () => {
  const dispatch = useDispatch()
const jsonAxiosGetResult = useSelector(state => state.jsonPlaceHolderReducer.jsonAxiosGetResult)
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage] = useState(5)


  const [toastState, setToastState] = useState({})

  useEffect(() => {
    dispatch(jsonPlaceholderGetReq())
    return () => {
      dispatch(jsonPlaceholderCleanReq())
    } 
  }, [])

  useEffect(() => {
    toast(toastState.name)
  }, [toastState])

  const handleClick = () => {    
    setToastState({
      ...toastState,
      name: prompt("Enter Whatever")
    })
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost -  postsPerPage
  const currentPosts = jsonAxiosGetResult.slice(indexOfFirstPost,indexOfLastPost)

const paginate = (number) => {
  setCurrentPage(number)
}


  return (
    <div className={styles.Toast}>
      <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={!currentPosts.length}
        />
     <Tippy content="Hello"><Button onClick={handleClick}>Button</Button></Tippy>
      <Posts jsonAxiosGetResult={currentPosts}/>
      <Pagination 
    postsPerPage={postsPerPage} 
    totalPosts={jsonAxiosGetResult.length} 
    paginate={paginate}
    currentPage={currentPage}
    />
      <ToastContainer />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    name: state.toastReducer.name,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openToast: () => dispatch(toastOpenActionCreator()),
    // jsonPlaceGetAxios: () => dispatch(jsonPlaceholderGetReq())
  }
}


export default React.memo(connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastComponent))

const Button = forwardRef((props,ref) => <button id={styles.toastButton} ref={ref} type='button' onClick={props.onClick}>
  {props.children}
</button>
)
