const ModalOverlay = (props) =>
{
    return <div className = {props.modalStyle}>
        <div className={props.contentStyle}>{props.content}</div>
        </div>
}

export default ModalOverlay;