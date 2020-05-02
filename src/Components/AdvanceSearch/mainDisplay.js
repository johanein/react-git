import React, { memo ,useState} from 'react'
import Modal from '../Modal/modal'
import Tippy from '@tippyjs/react';
import {
    Grid,
} from '@material-ui/core';
import styles from './advSearch.module.css'

const MainDisplay = memo(()=> {
    const [modalIsOpen,setIsOpen] = useState(false);
    const buttonClick = (params) => ()=>{
        setIsOpen(params)
    }

    return (
        <Grid
                id={styles.bigGrid}
                item
                xs={9}
            >
                <h1>Modal</h1>
<Tippy content='open modal'><button onClick={buttonClick(true)} > Open model</button></Tippy>
                        <Modal
          isOpen={modalIsOpen}
          onRequestClose={buttonClick(false)}
        >
            <h1>Modal title</h1>
            <Tippy content='close modal'><button onClick={buttonClick(false)} > close model</button></Tippy>
            </Modal>
            </Grid>
    )
})

export default MainDisplay
