import React from "react";
import "./style.css";

/**
 * Composant React qui affiche une modale.
 * Il permet à l'utilisateur de savoir si un employé a été ajouté avec succès.
 *
 * @param {Object} props - Les propriétés passées au composant Modale.
 * @param {boolean} props.show - L'état d'affichage de la modale.
 * @param {function} props.onClose - La fonction à appeler pour fermer la modale.
 * @param {string} props.title - Le titre de la modale.
 * @param {string} props.message - Le message à afficher dans la modale.
 * @returns {JSX.Element}
 */

const Modale = ({ show, onClose, title, message }) => {
  const showHideClassName = show
    ? "bground show-modale"
    : "bground hide-modale";
  return (
    <div
      className={showHideClassName}
      role="dialog"
      aria-modal="true"
      aria-label="Employe ajouté avec succès"
    >
      <div className="content">
        <div className="modal-header">
          <h2>{title}</h2>
          <span
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
            aria-hidden="true"
          >
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>{message}</p>
          <button type="button" className="modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modale;
