import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length>0){
              return(
                <React.Fragment>
                <Title name="your" title="cart"></Title>
                <CartColumns></CartColumns>
                </React.Fragment>
              );
            } else {
              return <EmptyCart></EmptyCart>;
            }
          }}
        </ProductConsumer>

        <EmptyCart></EmptyCart>
      </div>
    )
  }
}
