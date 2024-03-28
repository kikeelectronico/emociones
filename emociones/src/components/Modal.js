import React from "react";
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import "./modal.css"

export default function Modal(props) {

    const download = () => {

        let emotions = localStorage.getItem("emotions")    

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(emotions));
        element.setAttribute('download', "mis_emociones.json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    const upload = () => {

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
                        <h1 className="modal-title">Tus datos</h1>
                        <div className="modal-text">
                            <p>
                                Esta aplicación guarda dos tipos de datos: las notas que añades a cada emoción y el estado de selección de cada una de ellas.
                            </p>
                            <p>
                                Los datos se guardan solo en tu dispositivo por lo que solo tú puedes acceder a ellos.
                            </p>
                            <p>
                                Si lo deseas puedes usar los siguientes botones para descargar un archivo con tus datos o importarlos para restaurarlos.
                            </p>
                        </div>
                        <div className="modal-buttons">
                            <IconButton
                                aria-label="Descargar datos"
                                onClick={() => download()}
                            >
                                <FileDownloadOutlinedIcon className="iconButton"/>
                            </IconButton>
                            <IconButton
                                aria-label="Restaurar datos"
                                onClick={() => upload()}
                            >
                                <FileUploadOutlinedIcon className="iconButton"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}