import React, { useState, createContext } from 'react';

export const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [state, setState] = useState({
    preferences: '',
    bean: '',
    quantity: '',
    grind: '',
    deliveries: '',
  });

  return (
    <CoffeeContext.Provider value={[state, setState]}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
