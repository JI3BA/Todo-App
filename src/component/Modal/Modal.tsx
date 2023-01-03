import React from "react";
import { useNote } from "../../context";
import '../../styles/Modal.scss'

const Modal = () => {
    const { modal, modalNote, setModalNotes } = useNote()

    return (
        <div>
            {modal &&  <div className='modal' onClick={() => setModalNotes(false)}>
                    <div className="modal__container" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <div>
                            <p className="todo-item__title">
                                {modalNote[0].title}
                            </p>

                            <p className='todo-item__body'>
                                {modalNote[0].body}
                            </p>

                            <p className='todo-item__body'><span className='todo-item__body--bold'>Tags:</span>
                                                        {modalNote[0].tagArray.map((item, index) => <span key={index} className='todo-item__tag'>{item}</span>)}                             
                            </p>
                        </div>

                        <div className="modal__overlay"></div>

                        <div className='modal__buttons'>
                            <p className='button__close' onClick={() => setModalNotes(false)}>X</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal