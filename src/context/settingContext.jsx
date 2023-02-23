import React, { createContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  return (
    <SettingsContext.Provider
      value={{
        IsNavOpen,
        setIsNavOpen,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
