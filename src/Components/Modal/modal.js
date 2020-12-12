import React, { memo } from 'react'
import Modal from 'react-modal';
import ReactDom from 'react-dom'
import styles from './modal.module.css'
Modal.setAppElement('#root')
const modal = memo(function modal(props) {
    const {        isOpen,
    onRequestClose,
    overlayClassName,
    contentLabel} = props
    return ReactDom.createPortal(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={overlayClassName || styles.overlayStyle}
        contentLabel={contentLabel || styles.modalStyle}
      >
          {props.children}
          </Modal>,
document.getElementById('portal-root')
    )
})

modal.propTypes = {

}

export default modal
