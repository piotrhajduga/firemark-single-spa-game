//import './main.scss';
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Game from "./Game";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Game,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
