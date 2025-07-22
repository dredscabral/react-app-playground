import React from "react";

const BigList = ({ items }) => {
  console.log("Rendering BigList");
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default BigList;