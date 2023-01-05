import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { showSubmenu, location } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.tpp = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${showSubmenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      Submenu
    </aside>
  );
};

export default Submenu;
