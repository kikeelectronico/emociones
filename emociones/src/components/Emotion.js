import React, {useState, useEffect} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import TextField from '@mui/material/TextField';
import "./emotion.css"

export default function Emotion(props) {

  const [expanded, setExpanded] = useState(false)
  const [emotion, setEmotion] = useState(null)

  useEffect(() => {
    setEmotion(props.emotion)
    try {
      let test = props.emotion.notes.length
    } catch {
      let _emotion = {...emotion}
      _emotion["notes"] = ""
      setEmotion(_emotion)
      props.updateEmotion(emotion)
    }
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
    <>
    { emotion !== null ?
      <div
          className={"emotion-container" + (emotion.selected ? " emotion-selected" : "")}        
          onClick={() => {props.select(props.emotion)}}
      >
        <div className="emotion-header">
          <span className="emotion-name">
              {props.emotion.name}
          </span>
          <div className="emotion-icons">
            {
              emotion.notes.length > 0 ?
                <NotesOutlinedIcon className="iconStyle"/>
              :
                <></>
            }
          </div>
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
            <span className="emotion-content-title">Notas:</span>
            <TextField
              id="notes"
              multiline
              minRows={4}
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
    : <></> }</>
  )
}