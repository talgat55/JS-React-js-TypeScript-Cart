import React from 'react';
import styled from "styled-components";

const ITEMS = [
    {
        id: 0,
        name: "The Chelsea Boot",
        color: "Black",
        quantity: 1,
        price: "230.3",
        image: "data:image/png;base64,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"
    },
    {
        id: 1,
        name: "The Twill Snap Backpack",
        color: "Reverse Denim + Brown leather",
        quantity: 2,
        price: "65",
        image: "data:image/png;base64,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"
    },
    {
        id: 2,
        name: "The Twill Zip Tote",
        color: "Reverse Denim + Black leather",
        quantity: 2,
        price: "300",
        image: "data:image/png;base64,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"
    }

];
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
            <div>
                {
                    ITEMS.map((item, index) => (
                        <div key={index}>
                            <div className="item">
                                <div className="item_image">
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <div className="item_content">
                                    <div className="item_text">
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <div className="item_color">
                                            {item.color}
                                        </div>
                                        <div className="item_quantity">
                                            Quantity: {item.quantity}
                                        </div>
                                    </div>
                                    <div className="item_price">
                                        ${item.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </CartItemsComponent>
    )
}
export default CartItems;

const CartItemsComponent = styled.div`
  .cart_top-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .item{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .item_image{ 
    }
  .item_content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h3{
      font-size: 12px;
      line-height: 11px; 
      color: #777879;
      margin: 0 0 7px;
    }
    
    .item_color{
      font-size: 10px;
      line-height: 12px; 
      color: #2B2525;
    }
    
    .item_text{
      min-width: 220px;
      margin-left: 5px;
    }
    
    .item_quantity{
      font-size: 10px;
      line-height: 12px; 
      color: #2B2525;
    }
  }  
  } 
`;