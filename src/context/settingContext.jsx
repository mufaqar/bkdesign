import React, { createContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [projectpostion, setProjectPostion] = useState();
  return (
    <SettingsContext.Provider
      value={{
        IsNavOpen,
        setIsNavOpen,
        setOpenModel,
        openModel,
        setProjectPostion,
        projectpostion
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
