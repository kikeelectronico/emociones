import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

import "./modal.css"

export default function AddEmotionModal(props) {

    const [emotion_name, setEmotionName] = useState("")
    
    const addEmotion = () => {
        let emotions = JSON.parse(localStorage.getItem("emotions"))
        emotions.push({
            "name": emotion_name,
            "notes": "",
            "selected": false
        })
        emotions.sort((a, b) => a.name.localeCompare(b.name))
        localStorage.setItem("emotions", JSON.stringify(emotions))
        window.location.reload()
    }

  return (
    <>
        {
            props.visible ?
                <div className="modal-background">
                    <div className="modal-container">
                        <div className="modal-close">
                            <IconButton
                                aria-label="Descargar datos"
                                onClick={props.closeModal}
                            >
                                <CloseOutlinedIcon className="iconButton"/>
                            </IconButton>
                        </div>
                        <h1 className="modal-title">Añadir emoción</h1>
                        <p className="modal-text">
                            Escribe el nombre de la emoción a continuación y pulsa el botón para añadirla.
                        </p>
                        <div className="modal-form-container">
                            <TextField
                                id="emotion-name"
                                label=""
                                variant="standard"
                                className="text-field"
                                value={emotion_name}
                                onChange={event => setEmotionName(event.target.value)}
                            />
                        </div>
                        <div className="modal-buttons">
                            <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<SaveIcon className="iconButton" />}
                                onClick={addEmotion}
                            >
                                <span className="textButton"> Guardar </span>
                            </Button>
                           
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}