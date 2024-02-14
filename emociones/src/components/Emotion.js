import React from "react";
import "./emotion.css"

export default function Emotion(props) {

  return (
    <div
        className={"emotion-container" + (props.emotion.selected ? " emotion-selected" : "")}        
        onClick={() => {props.select(props.emotion)}}
    >
        <span className="emotion-name">
            {props.emotion.name}
        </span>
    </div>
  )
}