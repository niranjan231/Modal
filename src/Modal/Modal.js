import "./Modal.css";




const Modal=({handleReturn})=>{
    return(
        <>
        <div className="m-2"></div>
        <div className="m-1">
           <button onClick={handleReturn} className="modal-btn">Return</button>
        </div>
        </>
    )
}
export default Modal;