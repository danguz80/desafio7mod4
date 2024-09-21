import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; 

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext); // Obtener el token del UserContext

  return (
    <div className="container mt-4 d-flex flex-column">
      <h3>🛒 Carrito de Compras</h3>
      {cart.length > 0 ? (
        <>
          <ul className="list-group">
            {cart.map((pizza) => (
              <li key={pizza.id} className="list-group-item container text-center">
                <div className='row align-items-center'>
                  <img className='col' src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
                  <div className='col'>{pizza.name}</div>
                  <div className='col'>${pizza.price.toLocaleString()}</div>
                  <div className='col'>
                    <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-outline-danger">-</button>
                    <span className="mx-2">{pizza.quantity}</span>
                    <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-outline-success">+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-4">Total: ${total.toLocaleString()}</h4>
          {/* Mostrar el botón de pagar solo si el token es true */}
          {token ? (
            <button className="btn btn-primary mt-3">Pagar</button>
          ) : (
            <p className="text-danger">Inicia sesión para proceder con el pago.</p>
          )}
        </>
      ) : (
        <p className="text-center">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
