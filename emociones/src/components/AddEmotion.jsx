import React, {useState, useEffect} from "react";
import "./addEmotions.css"

import AddEmotionModal from "./AddEmotionModal";

export default function AddEmotion(props) {

  const [show_button, setShowButton] = useState(false)
  const [show_modal, setShowModal] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowButton(true), 1000)
  })

  return (
    <>
      {
        !show_button ? <></> : 
        <div className="add-container" onClick={() => setShowModal(true)}>
            <span className="add-title">
                Añadir emoción
            </span>
        </div>
      }
      <AddEmotionModal visible={show_modal} closeModal={() => {setShowModal(false)}}/>
    </>
  )
}