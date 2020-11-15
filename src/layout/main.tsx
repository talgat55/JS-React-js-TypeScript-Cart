import React from 'react';
import Header from "../Components/Header/Header";
import styled from "styled-components";
import CartItems from '../Components/Cart/CartItems';

const Main: React.FC = () => {

    return (
        <>
            <Header/>
            <ContentComponent className="content">
                <div className="content_first">

                </div>
                <div className="content_second">
                    <CartItems/>
                </div>
            </ContentComponent>
        </>
    )
}

export default Main;

const ContentComponent = styled.div`
  background: #E6E9F0;
  width: 700px;
  margin: 50px auto;
  
  display: flex;
   .content_first,
   .content_second{
    width: 50%;
   }
   .content_second{
      padding: 24px 15px 15px 15px;  
      background: #E6E9F0;
    }
`;