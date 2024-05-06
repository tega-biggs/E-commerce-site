import React, { Component } from 'react';
import Title from '../Title'; 
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            console.log(value);
            const {cart} = value;
            console.log(cart);
            if(cart && cart.length > 0){
              return (
                <React.Fragment>
                <Title name="your" title="cart"></Title>
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return  <EmptyCart />
            }
          }}
        </ProductConsumer> 
      </div>
    )
   }
}
