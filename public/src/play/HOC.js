import React from "react";
import ReactDOM from "react-dom";
let Privado = props => (
  <div>
    <p>info privada {props.info}</p>
  </div>
);

let Info = Componente => {
  return props => (
    <div>
      <h1>Propiedades privadad</h1>
      {props.isAdmin && <Componente {...props} />}
    </div>
  );
};

const MiInfo = Info(Privado);

ReactDOM.render(
  <MiInfo info="eduardo" isAdmin={true}/>,
  document.getElementById("titulo")
);
