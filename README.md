# thomas-vogeleisen-modale-component

OpenClassooms P14 - React component for Hrnet Project

## Author

- [Thomas Vogeleisen](https://github.com/ThomasVogeleisen/)

### Description

This is a React component for render a modale. Build for [HRnet app](https://github.com/OpenClassrooms-Student-Center/P12_Front-end), an [Openclassroom](https://openclassrooms.com/) project from "Application Developer - JavaScript React"

- The component on Github [here](https://github.com/ThomasVogeleisen/hrnet-react-component)
- The component on NPM : [here](https://www.npmjs.com/package/thomas-vogeleisen-modale-component)

### Installation

Install the component :

```bash
npm install thomas-vogeleisen-modale-component
```

### The Modale component

```javascript
import React from "react";
import "./style.css";

/**
 * Composant React qui affiche une modale.
 * Il permet à l'utilisateur de savoir si un employé a été ajouté avec succès.
 *
 * @param {Object} props - Les propriétés passées au composant Modale.
 * @param {boolean} props.show - L'état d'affichage de la modale.
 * @param {function} props.onClose - La fonction à appeler pour fermer la modale.
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
      aria-label="Modale windows validation"
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
```

### Simple example to use

```javascript
import React from "react";
import { useState } from "react";
import { Modale } from "thomas-vogeleisen-modale-component";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <Modale
        show={showModal}
        onClose={handleCloseModal}
        title="YourTitle"
        message="Your message"
      />
      <button onClick={handleOpenModal}>Open Modale</button>
    </>
  );
}

export default App;
```

### Props

| Name             | Type   | Description                                |
| ---------------- | ------ | ------------------------------------------ |
| **showModal**    | bool   | To display or not the modal.               |
| **setShowModal** | funct  | A function to set showModal true or false. |
| **title**        | string | Title for the modal.                       |
| **message**      | string | Message in the modal.                      |

## Dependencies

- Node.js : 18.17.1
- react: 18.3.1,
- react-dom: 18.3.1,

## Licence

- MIT
