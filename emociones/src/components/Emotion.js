import React from "react";
import "./emotion.css"

export default function Emotion(props) {

  return (
    <div className="emotion-container">
        <span className="emotion-name">
            {props.emotion.name}
        </span>
    </div>
  )
}