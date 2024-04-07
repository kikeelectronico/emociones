import React from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import "./modal.css"

export default function DeleteEmotionModal(props) {
    
    const deleteEmotion = () => {
        let emotions = JSON.parse(localStorage.getItem("emotions"))
        for (let i = 0; i < emotions.length; i++) {
            if (emotions[i].name === props.emotion_name) {
                emotions.splice(i,1)
                break
            }
        }
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
                        <h1 className="modal-title">Eliminar {props.emotion_name}</h1>
                        <p className="modal-text">
                            Pulsa el botón para eliminar la emoción de tu lista y las notas guardadas en ella.
                        </p>
                        <div className="modal-buttons">
                            <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<DeleteForeverIcon className="iconButton" />}
                                onClick={deleteEmotion}
                            >
                                <span className="textButton"> Eliminar </span>
                            </Button>
                           
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}