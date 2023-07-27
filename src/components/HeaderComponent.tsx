import { useContext } from 'react';
import { GemasContext } from '../context/GemasContext';

interface HeaderComponentProps {
  handlerShowCarrito: () => void;
}

export const HeaderComponent = ({ handlerShowCarrito }: HeaderComponentProps) => {
  const { gemasDisponibles, carrito } = useContext(GemasContext);
  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img src="./gem.png" alt="gem" />
        <span>{`${gemasDisponibles} Gemas`}</span>
      </div>
      <button onClick={handlerShowCarrito} className="text-white hover:underline">
        {`Ver Carrito(${carrito.length})`}
      </button>
    </div>
  );
};
