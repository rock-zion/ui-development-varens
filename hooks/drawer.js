import { createContext, useState } from 'react';

export const DrawerContext = createContext();
const DrawerProvider = props => {
  const [showNav, setShowNav] = useState(true);
  return (
    <DrawerContext.Provider value={{ showNav, setShowNav }}>
      {props.children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
