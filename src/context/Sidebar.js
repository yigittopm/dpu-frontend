import { useState, createContext, useContext } from "react";

const SidebarBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const values = { isOpen, setIsOpen };

  return (
    <SidebarBarContext.Provider value={values}>
      {children}
    </SidebarBarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarBarContext);
