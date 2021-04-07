import React from "react";
import Button from "react-bootstrap/Button";

export function SimpleExit(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onAction({});
  }

  return <Button onClick={handleClick}>{props.data.label}</Button>;
}
