import React from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from '@mui/material/styles';


import "./modal.css"

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function Modal(props) {

    const exportData = () => {
        let emotions = localStorage.getItem("emotions")
        let data = "{\"emotions\": " + emotions + "}"    

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', "mis_emociones.json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    const importData = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            const emotions = JSON.parse(reader.result)["emotions"]
            localStorage.setItem("emotions", JSON.stringify(emotions))
            window.location.reload()
        }
        reader.onerror = () => {
            console.log("Imposible to read")
        }
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
                                Si lo deseas puedes usar los siguientes botones para exportar un archivo con tus datos o importarlo para restaurarlos.
                            </p>
                        </div>
                        <div className="modal-buttons">
                            <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<FileDownloadOutlinedIcon className="iconButton" />}
                                onClick={exportData}
                            >
                                <span className="textButton"> Exportar </span>
                            </Button>
                            <Button
                                component="label"
                                role={undefined}
                                variant="outlined"
                                tabIndex={-1}
                                startIcon={<FileUploadOutlinedIcon className="iconButton" />}
                            >
                                <span className="textButton"> Importar </span>
                                <VisuallyHiddenInput type="file" onChange={importData} />
                            </Button>
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}