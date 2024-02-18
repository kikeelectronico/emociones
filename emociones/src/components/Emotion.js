import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TextField from '@mui/material/TextField';
import "./emotion.css"

export default function Emotion(props) {

  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
    props.select(props.emotion)
  }

  return (
    <div
        className={"emotion-container" + (props.emotion.selected ? " emotion-selected" : "")}        
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
            defaultValue=""
            variant="standard"
            className="text-field"
          />
        </div>
    </div>
  )
}