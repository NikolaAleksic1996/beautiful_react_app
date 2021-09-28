import React from 'react';
import {useState} from "react";

//Styles
import './index.css'

//Components
import Modal from '../dropDownForDelete/Modal';
import Backdrop from "../dropDownForDelete/Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> : null }
            { modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null }

        </div>
    );
}

export default Todo
