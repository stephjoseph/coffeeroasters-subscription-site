import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [price, setPrice] = useState('0.00');

  return (
    <ModalContext.Provider
      value={[isModalOpen, setIsModalOpen, price, setPrice]}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
