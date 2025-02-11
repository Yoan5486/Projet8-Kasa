// Importation des Composants Reacts

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

// Variables pour ouvrir le Collapse

// Ouverture et Fermeture du Collapse 

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  // Intégration de la page
  return (
    // Design du Collapse 
    <div className={className}>
      <div className="redbox__design" onClick={toggleCollapse}>
        <h3 className="txt__redbox">{title}</h3>
        {/*Îcone du Chevron*/}
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} size="lg" className="icon__chevron" />
      </div>
      {/*Contenu du Collapse*/}
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  )
}

// PropTypes pour le débogage

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,


}

// Exportation du Composant Collapse 

export default Collapse;