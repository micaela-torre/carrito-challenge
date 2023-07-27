import { useContext } from 'react';
import { GemasContext, Item } from '../context/GemasContext';
import { BuyService } from '../services/buy.service';
import { SnackbarUtilities } from '../helpers/snackbar-manager';

export const useGemas = () => {
  const { gemasDisponibles, carrito, setCarrito, setGemasDisponibles } = useContext(GemasContext);
  const agregarItemAlCarrito = (item: Item) => {
    if (gemasDisponibles >= item.precio) {
      setCarrito([...carrito, item]);
      setGemasDisponibles(gemasDisponibles - item.precio);
    }
  };

  const eliminarItemDelCarrito = (id: number, precio: number) => {
    const nuevoCarrito = carrito.filter(product => product.id !== id);
    setCarrito(nuevoCarrito);
    setGemasDisponibles(gemasDisponibles + precio);
  };

  const comprarProductos = async () => {
    try {
      const productosSeleccionados = carrito.map(product => product.id);
      await BuyService.buyProducts({ itemsId: productosSeleccionados });
      setCarrito([]);
      setGemasDisponibles(3);
      SnackbarUtilities.success('Compra realizada con exito!');
    } catch (err) {
      console.log(err);
      SnackbarUtilities.error('Hubo un error al intentar realizar la compra.');
    }
  };

  return { agregarItemAlCarrito, eliminarItemDelCarrito, comprarProductos };
};
