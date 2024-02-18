import React, {useState, useEffect} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TextField from '@mui/material/TextField';
import "./emotion.css"

export default function Emotion(props) {

  const [expanded, setExpanded] = useState(false)
  const [emotion, setEmotion] = useState({})

  useEffect(() => {
    setEmotion(props.emotion)
  }, [props.emotion])

  useEffect(() => {
    const update_timeout = setTimeout(() => {
      props.updateEmotion(emotion)
    }, 1000)

    return () => clearTimeout(update_timeout)
  }, [emotion])

  const toggleExpand = () => {
    if (expanded) props.updateEmotion(emotion)
    setExpanded(!expanded)
    props.select(props.emotion)
  }

  return (
    <div
        className={"emotion-container" + (emotion.selected ? " emotion-selected" : "")}        
        onClick={() => {props.select(props.emotion)}}
    >
      <div className="emotion-header">
        <span className="emotion-name">
            {props.emotion.name}
        </span>
        <div className="emotion-expand">
          {
            !expanded ?
              <ExpandMoreIcon onClick={toggleExpand}/>
            :
              <ExpandLessIcon onClick={toggleExpand}/>
          }
          
        </div>
      </div>
      <div className={"emotion-content-container " + (expanded ? "emotion-content-container-expanded" : "emotion-content-container-no-expanded")}>
          Notas:
          <TextField
            id="notes"
            multiline
            rows={4}
            variant="standard"
            className="text-field"
            value={emotion.notes}
            onClick={() => {
              props.select(props.emotion)
            }}
            onChange={(event) => {
              let _emotion = {...emotion}
              _emotion["notes"] = event.target.value
              setEmotion(_emotion)
            }}
          />
        </div>
    </div>
  )
}