import React from "react";
import { useState, useEffect } from "react";

export const FunctionalCompInput = () => {
  const name = useFormInput("Leslie");
  const width = useWindowWidth();

  // set document title every time this function component re-render
  useDocumentTitle(name.value);

  return (
    <div>
      <label htmlFor="">Type to set document title</label>
      <input {...name} />
      <h2>resize window</h2>
      {width}
    </div>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.currentTarget.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

function useDocumentTitle(title) {
  // set document title by useEffect
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  // hook provide life cycle function
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // return a function for react to call in componentwillunmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // return width value
  return width;
}
