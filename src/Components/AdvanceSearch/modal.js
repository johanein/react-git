import React, { memo ,useState} from 'react'
import Modal from 'react-modal';
import {
    Grid,
} from '@material-ui/core';
import styles from './advSearch.module.css'
Modal.setAppElement('#root')

const ModalComp = memo((props)=> {
    const [modalIsOpen,setIsOpen] = useState(false);
    const buttonClick = (params) => ()=>{
        setIsOpen(params)
    }
const styleModal = {
    overlay: {
      backgroundColor: 'grey'
    },
    content: {
      color: 'red'
    }
  }

    return (
        <Grid
                id={styles.bigGrid}
                item
                xs={9}
            >
                <h1>Modal</h1>
<button onClick={buttonClick(true)} > Open model</button>
                        <Modal
          isOpen={modalIsOpen}
          onRequestClose={buttonClick(false)}
          style={styleModal}
        //   overlayClassName={styles.modalStyle}
        //   contentLabel={styles.overlayStyle}
        >
            <h1>Modal title</h1>
            <button onClick={buttonClick(false)} > close model</button>
            </Modal>
            </Grid>
    )
})

export default ModalComp
