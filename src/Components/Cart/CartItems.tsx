import React from 'react';
import styled from "styled-components";

const CartItems: React.FC = () => {

    return (
        <CartItemsComponent>
            <div className="cart_top-block">
                <h3 className="cart_title">
                    Order Summary
                </h3>
                <a href="#" className="cart_link-edit">
                    edit order
                </a>
            </div>

        </CartItemsComponent>
    )
}
export default CartItems;

const CartItemsComponent = styled.div`
  .cart_top-block{
    display: flex;
    align-items: center;
     margin: 0 0 15px;
    .cart_title{
      margin: 0;
      font-size: 16px;
      line-height: 18px;
      font-weight: 400;
      color: #5A1094;
    }
    .cart_link-edit{
      font-size: 12px;
      line-height: 14px; 
      color: #979797;
      text-decoration: underline;
    }
    
    
  }


`;