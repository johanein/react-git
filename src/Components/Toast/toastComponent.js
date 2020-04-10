import React, { useState, useEffect, forwardRef }  from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Tippy from '@tippyjs/react';
import Posts from './posts'
import Pagination from './pagination'
import styles from './toast.module.css'
import { toastOpenActionCreator } from '../../Redux/actions/toastAction'
import { jsonPlaceholderGetReq } from '../../Redux/actions/jsonPlaceHolderAction'

const ToastComponent = () => {
  const dispatch = useDispatch()
const jsonAxiosGetResult = useSelector(state => state.jsonPlaceHolderReducer.jsonAxiosGetResult)
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage] = useState(5)


  const [toastState, setToastState] = useState({})

  useEffect(() => {
    dispatch(jsonPlaceholderGetReq())
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
     <Tippy content="Hello"><Button onClick={handleClick}>Button</Button></Tippy>
      <Posts jsonAxiosGetResult={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={jsonAxiosGetResult.length} paginate={paginate}/>
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
