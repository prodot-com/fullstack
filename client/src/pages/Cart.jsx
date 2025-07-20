
import { useEffect, useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cart);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {items.map((item, idx) => (
        <div key={idx}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
