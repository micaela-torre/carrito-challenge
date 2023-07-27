import { Product } from '../../../interfaces/product.interface';

interface ProductoComponentProps extends Product {
  handleAgregarAlCarrito: (item: Product) => void;
  isDisabled?: boolean;
}
const ProductoComponent = ({ nombre, precio, id, categoria, descripcion, imagen, handleAgregarAlCarrito, isDisabled }: ProductoComponentProps) => {
  return (
    <div className="w-60 h-96 flex flex-col items-center justify-items-stretch rounded overflow-hidden shadow-lg border-2 border-transparent hover:border-violet-700 bg-stone-700 p-2 transition">
      <div className="rounded-full self-end bg-violet-700 text-white flex items-center px-2">
        <span>{precio}</span>
        <img src="./gem.png" width={15} alt="gem" />
      </div>
      <img className="w-20 h-20 object-cover" src={imagen} alt={nombre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-white mb-2">{nombre}</div>
        <p className="text-gray-400 text-base">{descripcion}</p>
      </div>
      <button
        onClick={() => handleAgregarAlCarrito({ nombre, precio, id, categoria, descripcion, imagen })}
        disabled={isDisabled}
        className="mt-auto bg-violet-700 disabled:bg-stone-400 disabled:pointer-events-none transform transition-all hover:scale-105 text-white font-bold py-2 px-4 rounded-full w-4/5"
      >
        Agregar
      </button>
    </div>
  );
};

export default ProductoComponent;
