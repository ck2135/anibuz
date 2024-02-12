import React, { useState } from "react";
import Model from "./Model";

const CallToAction = () => {
  const [model, setModel] = useState(false);

  const handleclick = () => {
    setModel(!model);
  };
  return (
    <>
      <section className="call-to-action">
        <h2>Hurry Up, Join Now!</h2>
        <button onClick={handleclick}>Join Now</button>
      </section>

      {model && <Model handleclick={handleclick}/> }
    </>
  );
};

export default CallToAction;
