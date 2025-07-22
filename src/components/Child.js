import React from "react";

const Child = ({ text, onClick }) => {
  console.log(`Rendering Child: ${text}`);
  return <button onClick={onClick}>{text}</button>;
};

export default Child;