import React from "react"
import ReactModal from "react-modal"
ReactModal.setAppElement("body")
const Modal = (props) => {
    return (
        <ReactModal 
        isOpen={!!props.selectionOption}
        onRequestClose={props.handleClearSelectionOption}
        className="modal"
        closeTimeoutMS={200}>
            <h3 className="modal__title">选中的选项</h3>
            <p className="modal__body">{props.selectionOption}</p>
            <button onClick={props.handleClearSelectionOption} className="button">好的</button>
        </ReactModal>
    )
}
export default Modal