import React, { memo } from 'react'
import Modal from 'react-modal';
import styles from './modal.module.css'
Modal.setAppElement('#root')
const modal = memo(function modal(props) {
    const {        isOpen,
    onRequestClose,
    overlayClassName,
    contentLabel} = props
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={overlayClassName || styles.overlayStyle}
        contentLabel={contentLabel || styles.modalStyle}
      >
          {props.children}
          </Modal>
    )
})

modal.propTypes = {

}

export default modal
