import React, {useState, useEffect} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import "./emotion.css"

export default function Emotion(props) {

  const [expanded, setExpanded] = useState(false)
  const [emotion, setEmotion] = useState(null)
  const [links, setLinks] = useState([])

  useEffect(() => {
    setEmotion(props.emotion)
  }, [props.emotion])

  useEffect(() => {
    if (emotion) {
      let _links = []
      let _text = emotion.notes.split(/\n| /)
      for (let i = 0; i < _text.length; i++) {
        if (_text[i].includes("https")) {
          _links.push({
            "url": _text[i]
          })
        }
      }
      setLinks(_links)
    }
  }, [emotion])

  const toggleExpand = () => {
    if (expanded) props.updateEmotion(emotion)
    setExpanded(!expanded)
  }

  const selectEmotion = () => {
    let _emotion = {...emotion}
    _emotion["selected"] = !_emotion.selected
    props.updateEmotion(_emotion)
    setEmotion(_emotion)
  }
  
  return (
    <>
    { emotion !== null ?
      <div className={"emotion-container" + (emotion.selected ? " emotion-selected" : "")}>
        <div className="emotion-header">
          <span
            className="emotion-name"
            onClick={selectEmotion}
          >
              {props.emotion.name}
          </span>
          <div
            className="emotion-icons"
            onClick={selectEmotion}
          >
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
              onChange={(event) => {
                let _emotion = {...emotion}
                _emotion["notes"] = event.target.value
                props.updateEmotion(_emotion)
                setEmotion(_emotion)
              }}
            />
            <div className="chips-container">
              {
                links.map((link) => {
                  return (
                    <div className="link-chip">
                      <Chip
                        label={link.url}
                        onClick={() => {
                          window.open(link.url, '_blank').focus()
                        }}
                      />
                    </div>  
                  )
                })
              }            
            </div>          
        </div>
      </div>
    : <></> }</>
  )
}