import React from "react";

const person = props => {
  return (
    <div className="card">
      <div>{props.name}</div>
      <input type="text" onChange={props.onChange} value={props.name} />
    </div>
  );
};
export default person;
