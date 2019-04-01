import React from "react";

const Error = ({ onRetry }) => (
  <div className="error">
    <h1>Ops!</h1>
    <p>Ocorreu um erro inesperado ao carregar a lista de estudantes.</p>
    <div className="error__button__background">
      <button className="error__button" onClick={onRetry}>
        Tentar novamente
      </button>
    </div>
  </div>
);

export default Error;
