import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('overlays')
const Modal = props => {
return <Fragment>
    {createPortal(<Backdrop className ={styles.backdrop} hideCartHandler = {props.hideCartHandler}/>, portalElement)}
    {createPortal(<ModalOverlay modalStyle = {styles.modal} contentStyle = {styles.content} content = {props.children}/>, portalElement)}
</Fragment>
};

export default Modal;
