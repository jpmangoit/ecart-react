import React, { Fragment, useEffect, useState} from 'react'
import "./Cart.css";
import { getCartItems, removeCart } from "../../../action/CartAction"
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from "./CartItems"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const alert = useAlert()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { cartItems} = useSelector((state) => state.cart)
  const [loading, setLoading] = useState(false);

  const cartData = cartItems[0]?.CartItems
  // console.log(cartData,"lll")

  const token = localStorage.getItem("userDetails");
  const dataToken = JSON.parse(token)

  const handleRemoveAllproduct = () => {
     dispatch(removeCart(dataToken.token, dataToken.user.id))
     toast.error('Delete All Items From Your Cart');
     navigate('/products');
  }

  useEffect(() => {
    if (!dataToken) {
      navigate('/login');
    } else {
      setLoading(true);
      dispatch(getCartItems(dataToken.token, dataToken.user.id)).then(() => {
        setLoading(false);
      });
    }
  }, [dispatch, dataToken, navigate]);

  // useEffect(() => {
  //   dispatch(getCartItems(dataToken.token, dataToken.user.id))
  // }, [])

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error)
  //   }
  // }, [error])

  if (loading) {
    return <p>Loading cart items...</p>;
  }

  return (

    <Fragment>

      <div className="shopping-cart">
        <div className="title">
         Shopping Cart
         <button onClick={handleRemoveAllproduct} > Remove All </button>
        </div>
        <Fragment>
          {
          cartData?.map((items) => (

              <div  key={items.id}>
                <div key={items.id} className="item-section">
                  <div className="image-section">
                    <img className='productImg' src={items.Product.ProductImages.length
                      ? items.Product.ProductImages[0].path
                      : ""} alt={items.Product.ProductImages[0].id} />
                  </div>

                  <div className="description">
                    <span>{items.name}</span>
                    <span>₹ {items.price}</span>
                  </div>

                    <CartItems items={items} />

                  {/* <input className="total-price" readOnly name="name" value={items.total} /> */}

                </div>
              </div>

            ))
          }
        </Fragment>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="customer-login payment-details mt-30">
            <h4 className="title-1 title-border text-uppercase">payment details</h4>
            <table>
              <tbody>
                <tr>
                  <td className="text-left">Cart Subtotal</td>
                  <td className="text-right">₹{cartItems[0]?.grandTotal} </td>
                </tr>
                <tr>
                  <td className="text-left">Delivery Charge</td>
                  <td className="text-right">₹ 20.00</td>
                </tr>
                <tr>
                  <td className="text-left">Grand Total</td>
                  <td className="text-right">₹ {cartItems[0]?.grandTotal + 20}</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" data-text="apply coupon" className="button-one submit-button mt-15">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default Cart