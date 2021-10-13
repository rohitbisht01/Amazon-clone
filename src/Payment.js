import React , { useState, useEffect }from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom'; 
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios'


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError]= useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies submits
                url: `./payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.thoudandSeparator.clientSecret);
        }
        getClientSecret();
    }, [basket])

    console.log('The secret is >>>', clientSecret);

    const handleSubmit = async (event) => {
        // stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            Payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('./orders');
        })

    }

    const handleChange = (event) => {
        // listen for changes in the CardElement
        // and display any errors as the types their card deatils

        setDisabled(event.empty);
        setError(error.event ? event.error.message : "");

    }

    return (
      <div className="payment">
        <h1>Checkout {<Link to="/checkout">({basket?.length} items)</Link>}</h1>
        <div className="payment__container">
          {/* payment section -- delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>New Colony Dharanula</p>
              <p>Almora, Uttarakhand</p>
            </div>
          </div>

          {/* payment section -- review items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Payemnt section -- payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Details</h3>
            </div>
            <div className="payment__details">
                <form onSubmit = {handleSubmit}>
                    <CardElement onChange = {handleChange} />

                    <div className="payment__priceContainer">
                        <CurrencyFormat 
                            renderText = {(value) => (
                                    <h3>Order Total : {value}</h3>
                            )}
                            decimalScale = {2}
                            value = {getBasketTotal(basket)}
                            displayType = {"text"}
                            thoudandSeparator = {true}
                            prefix = {"$"}    
                        />
                        <button disabled = {processing || disabled || succeeded} >
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                    </div>

                    {error && <div>{error}</div>}

                </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
