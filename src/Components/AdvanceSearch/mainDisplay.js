import React, { memo ,useState} from 'react'
import Tippy from '@tippyjs/react';
import {
    Grid,
} from '@material-ui/core';
import { SketchPicker } from 'react-color';
import Modal from '../Modal/modal'
import styles from './advSearch.module.css'

const MainDisplay = memo(()=> {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [color,setColor] = useState('#fff');
    const buttonClick = (params) => ()=>{
        setIsOpen(params)
    }
    const handleColorChangeComplete = (params) => {
        setColor(params.hex)
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
            <Grid   container
  direction="column"
  justify="center"
  alignItems="center"
  >
            <h1>Modal title</h1>
            <Grid   item
  direction="row"
  justify="center"
  alignItems="center"
  >
            <SketchPicker
        color={color}
        onChangeComplete={handleColorChangeComplete}
      />
            </Grid>
      <text>{color}</text>
            <Tippy content='close modal'><button onClick={buttonClick(false)} > close model</button></Tippy>
            </Grid>
            </Modal>
            </Grid>
    )
})

export default MainDisplay
