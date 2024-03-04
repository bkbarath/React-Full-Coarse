import React from "react";

const Toggle = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  const handleFontStyle = (e) => {
    console.log(e.target.value)
    document
      .querySelector("body")
      .setAttribute("common-font-style", e.target.checked&&e.target.value);
  };
  return (
    <div>
      <input type="checkbox" onChange={toggleTheme} />
      <input type="checkbox" value="sans-serif" onChange={handleFontStyle} />
      <label htmlFor="sans-serif">
        San Sherif
      </label>
      <input type="checkbox" value="Cambria" onChange={handleFontStyle} />
      <label htmlFor="Cambria" >
        Cambria
      </label>
    </div>
  );
};

export default Toggle;
