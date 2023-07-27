import { useState } from 'react';
import { HeaderComponent } from '../../components/HeaderComponent';
import { CarritoComponent } from '../../components/CarritoComponent/CarritoComponent';
import { ListadoProductosComponent } from '../../components/ListadoProductosComponent/ListadoProductosComponent';

const Home = () => {
  const [showCarrito, setShowCarrito] = useState(false);

  const handlerShowCarrito = () => setShowCarrito(prev => !prev);

  return (
    <div className="min-h-full bg-fixed" style={{ backgroundImage: 'url(background.webp)' }}>
      <HeaderComponent handlerShowCarrito={handlerShowCarrito} />
      <div className="container mx-auto flex justify-center min-h-full">
        <div className="mx-auto  w-full py-16">
          {showCarrito ? <CarritoComponent handlerShowCarrito={handlerShowCarrito} /> : <ListadoProductosComponent />}
        </div>
      </div>
    </div>
  );
};

export default Home;
