import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <h1>Waves</h1>
      <button>
        LibrarySong
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
