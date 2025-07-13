import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-item-card">
                <img src={url + '/images/' + item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p className="item-total">Total: ₹{item.price * cartItems[item._id]}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item._id, true)}>Remove</button>
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h3>Cart Total</h3>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <div className="cart-total-detail total-bold">
            <p>Total</p>
            <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
