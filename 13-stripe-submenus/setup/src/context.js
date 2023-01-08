import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSideBar, setSideBar] = useState(false);
  const [showSubmenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSideBar = () => {
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setSubmenu(true);
  };

  const closeSubmenu = () => {
    setSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        showSideBar,
        showSubmenu,
        openSideBar,
        closeSideBar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
