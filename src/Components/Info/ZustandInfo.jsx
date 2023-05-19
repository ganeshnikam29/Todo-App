import React from "react";
import "./Accordion.css";
import Accordion from "./Accordion";

export const ZustandInfo = () => {
  return (
    <div>
      <h3>Zustand: State Management Library</h3>
      <Accordion
        title="Simplicity"
        content="The API is straightforward and use to understand, making to it easy
          for developer to get started with state management. One of the main
          benefit of using zustand is its Simplicity."
      />
      <Accordion
        title="Build on the top of Context API"
        content="Zustand is built on the of Context API"
      />
      <Accordion
        title="uses Immer for Immutable Updates"
        content=" Zustand uses immer for immutable updates ,which allows efficiently
          updates large and complex state Objects."
      />
      <Accordion
        title="Avoid Un-neccessary re-renders"
        content="Zustand avoids un-necessary re-renders.​"
      />
    </div>
  );
};
