import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
//import Modal from 'react-modal';
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deletehandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deletehandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

      {/* // works same as above line */}
    </div>
  );
}
export default Todo;
