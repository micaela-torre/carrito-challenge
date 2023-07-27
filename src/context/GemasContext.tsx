import React, { createContext, useState } from 'react';

export interface Item {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

interface GemasContextProps {
  gemasDisponibles: number;
  carrito: Item[];
  setCarrito: React.Dispatch<React.SetStateAction<Item[]>>;
  setGemasDisponibles: React.Dispatch<React.SetStateAction<number>>;
}

export const GemasContext = createContext<GemasContextProps>({
  gemasDisponibles: 0,
  carrito: [],
  setCarrito: () => {},
  setGemasDisponibles: () => {},
});

export const GemasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gemasDisponibles, setGemasDisponibles] = useState(3);
  const [carrito, setCarrito] = useState<Item[]>([]);

  return (
    <GemasContext.Provider
      value={{
        gemasDisponibles,
        carrito,
        setCarrito,
        setGemasDisponibles,
      }}
    >
      {children}
    </GemasContext.Provider>
  );
};
