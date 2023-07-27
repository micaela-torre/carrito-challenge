interface CarritoItemProps {
  imagen: string;
  nombre: string;
  precio: number;
  id: number;
  handleEliminarItem: (id: number, precio: number) => void;
}

const CarritoItem = ({ imagen, nombre, id, precio, handleEliminarItem }: CarritoItemProps) => {
  return (
    <div className="flex items-center justify-between bg-stone-700 p-4 border-b border-stone-500">
      <div className="w-10 h-10 mr-4 rounded-full bg-stone-500">
        <img className="w-10 h-10 rounded-full" src={imagen} alt={nombre} />
      </div>
      <p className="flex-1">{nombre}</p>
      <button onClick={() => handleEliminarItem(id, precio)} className="text-stone-500">
        X
      </button>
    </div>
  );
};

export default CarritoItem;
