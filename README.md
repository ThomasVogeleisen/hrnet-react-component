# thomas-vogeleisen-modale-component

React component for OC Hrnet Project

## Author

- [Thomas Vogeleisen](https://github.com/ThomasVogeleisen/)

### Description

This is a React component that renders a modale. Build for [HRnet app](https://github.com/OpenClassrooms-Student-Center/P12_Front-end), an [Openclassroom](https://openclassrooms.com/) project for the training "Application Developer - JavaScript React"

- The componant on Github [here](https://github.com/Stv-devl/react-simple-table-component)
- The componant on NPM : [here](https://www.npmjs.com/package/react-simple-table-component-v1)

### Built-with

- [React](https://reactjs.org/)

### Installation

Install the component :

```bash
npm i thomas-vogeleisen-modale-component
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

const Modale = ({ show, onClose }) => {
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
          <h2>Employee Created!</h2>
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
          <p>You have successfully added a new employee.</p>
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

### Simple examples to use

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
      <Modale show={showModal} onClose={handleCloseModal} />
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
| **Message**      | string | Message in the modal.                      |

## Dependencies

- Node.js : 18.17.1
- react: 18.3.1,
- react-dom: 18.3.1,
- thomas-vogeleisen-modale-component: 1.2.1
