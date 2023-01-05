import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowBar] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openSideBar = () => {
    setShowBar(true);
  };

  const closeSideBar = () => {
    setShowBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSideBar,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
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
