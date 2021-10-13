import React , { useEffect }from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' 
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import {loadStripe, loadstripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
// import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51JW08LSHUECH8zeWoEjfQyXypObqUkTwohEmJuwbWzEdQ7oPnc9Wc5vG2bXO7Mje7sgAU9tb0FpiNRm3cDazmuRT00kgdz7uka"
);

function App() {

  const[ {}, dispatch ] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>> ',authUser);

      if(authUser){
        // user just logged in or the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      }
      else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/orders">
            <Orders />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;