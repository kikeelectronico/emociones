import React, {useState, useEffect} from "react";
import "./addEmotions.css"

export default function AddEmotion(props) {

  const [show_button, setShowButton] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowButton(true), 1000)
  })

  return (
    <>
      {
        !show_button ? <></> : 
        <div className="add-container">
            <span className="add-title">
                Añadir emoción
            </span>
        </div>
      }
    </>
  )
}