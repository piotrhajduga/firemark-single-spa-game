import React from "react";
import ReactMarkdown from "react-markdown";

export function SimpleText(props) {
  return <ReactMarkdown>{props.data.content}</ReactMarkdown>;
}
