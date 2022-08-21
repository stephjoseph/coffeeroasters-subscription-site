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

  const [orderComplete, setOrderComplete] = useState(false);

  return (
    <CoffeeContext.Provider
      value={[state, setState, orderComplete, setOrderComplete]}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
