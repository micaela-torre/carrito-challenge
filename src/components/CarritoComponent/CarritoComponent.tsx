import { useContext } from 'react';
import { useGemas } from '../../hooks/useGemas';
import CarritoItem from './components/CarritoItem';
import { GemasContext } from '../../context/GemasContext';

interface CarritoComponentProps {
  handlerShowCarrito: () => void;
}

export const CarritoComponent = ({ handlerShowCarrito }: CarritoComponentProps) => {
  const { eliminarItemDelCarrito, comprarProductos } = useGemas();
  const { carrito } = useContext(GemasContext);

  const handleEliminarItem = (id: number, precio: number) => eliminarItemDelCarrito(id, precio);

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/5 flex flex-col justify-center">
        <button className="mt-auto bg-violet-700 my-2 text-white self-start font-bold py-2 px-4 rounded-full" onClick={handlerShowCarrito}>
          Volver
        </button>
        <div className="flex flex-col justify-center">
          {carrito?.map(item => (
            <CarritoItem key={item.id} {...item} handleEliminarItem={handleEliminarItem} />
          ))}
        </div>
        {carrito?.length > 0 && (
          <button onClick={comprarProductos} className="w-full   bg-violet-700 my-2 text-white   font-bold py-2 px-4 rounded-full">
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};
