import React from "react";
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
                        </div>
                    </div>
                </div>
            : <></>
        }
    </>
  )
}