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

  const [isOpen, setIsOpen] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [disabledQuestion, setDisabledQuestion] = useState({
    0: false,
    1: true,
    2: true,
    3: true,
    4: true,
  });

  return (
    <CoffeeContext.Provider
      value={[
        state,
        setState,
        orderComplete,
        setOrderComplete,
        isOpen,
        setIsOpen,
        disabledQuestion,
        setDisabledQuestion,
      ]}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
