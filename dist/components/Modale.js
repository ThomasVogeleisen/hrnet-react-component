"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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

const Modale = _ref => {
  let {
    show,
    onClose,
    title,
    message
  } = _ref;
  const showHideClassName = show ? "bground show-modale" : "bground hide-modale";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: showHideClassName,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Employe ajout\xE9 avec succ\xE8s"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement("span", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: onClose,
    "aria-hidden": "true"
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("p", null, message), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-btn",
    onClick: onClose
  }, "Close"))));
};
var _default = exports.default = Modale;