import React from "react";
import IconButton from '@mui/material/IconButton';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import "./modal.css"

export default function Modal(props) {

  return (
    <>
        {
            props.visible ?
                <div className="modal-background">
                    <div className="modal-container">
                        <h1 className="modal-title">Tus datos</h1>
                        <div className="modal-text">
                            <p>
                                Esta aplicación guarda dos tipos de datos: las notas que añadas a cada emoción y el estado de selección de cada una de ellas.
                            </p>
                            <p>
                                Los datos se guardan solo en tu dispositivo por lo que solo tu puedes acceder a ellos.
                            </p>
                            <p>
                                Si lo deseas puedes usar los siguientes botones para descargar un archivo con tus datos o importarlos para restaurarlos.
                            </p>
                        </div>
                        <div className="modal-buttons">
                            <IconButton
                                aria-label="Descargar datos"
                                onClick={() => {}}
                            >
                                <FileDownloadOutlinedIcon  className="iconButton"/>
                            </IconButton>
                            <IconButton
                                aria-label="Restaurar datos"
                                onClick={() => {}}
                            >
                                <FileUploadOutlinedIcon  className="iconButton"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}