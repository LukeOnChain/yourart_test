import "./Common.css";
import React from "react";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="accordion" onClick={() => setIsOpen(!isOpen)}>
      <h3 className="accordion__title">{props.title}</h3>
      {isOpen ? props.child : null}
    </div>
  );
}
