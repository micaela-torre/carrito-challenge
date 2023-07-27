import { useContext } from 'react';
import { useDataList } from '../../hooks/useDataList';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import ProductoComponent from './components/ProductoComponent';
import { GemasContext } from '../../context/GemasContext';
import { useGemas } from '../../hooks/useGemas';

export const ListadoProductosComponent = () => {
  const { gemasDisponibles, carrito } = useContext(GemasContext);
  const { list, isDataLoading, error } = useDataList({ service: ProductsService.getProducts });
  const { agregarItemAlCarrito } = useGemas();

  const handleAgregarAlCarrito = (item: Product) => {
    if (gemasDisponibles >= item.precio) agregarItemAlCarrito(item);
  };

  const handleDeshabilitarBoton = (item: Product) => {
    const isItemInCarrito = carrito.some(product => product.categoria === item.categoria);
    const isItemDisabled = gemasDisponibles < item.precio;
    return isItemInCarrito || isItemDisabled;
  };

  if (isDataLoading) return <p>Cargando... </p>;
  if (error || !list.length) return <p>Hubo un error al cargar los productos. </p>;

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-10">
        {list?.map((product: Product) => (
          <ProductoComponent key={product.id} {...product} handleAgregarAlCarrito={handleAgregarAlCarrito} isDisabled={handleDeshabilitarBoton(product)} />
        ))}
      </div>
    </div>
  );
};
