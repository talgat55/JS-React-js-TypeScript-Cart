import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from 'semantic-ui-react';
import CartImg from '../../static/cart.svg'
import LogoImg from '../../static/logo.png'

const Header: React.FC = () => {

    return (
        <HeaderComponent className="header">
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <a href="/" className="header_logo">
                                <img src={LogoImg} alt="Home"/>
                                <p>
                                    Front-end Developer Terst Task
                                </p>
                            </a>
                        </Grid.Column>
                        <Grid.Column/>
                        <Grid.Column className=" middle aligned">
                            <div className="header_cart">
                                cart
                                <img src={CartImg} alt="Cart"/>
                                <span className="header_cart-counter">
                                    3
                                </span>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </HeaderComponent>
    )
}

export default Header;

const HeaderComponent = styled.header`
  &.header{
    padding: 12px 0;
    position: relative;
    
    &:after{
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, #7E00E8 0%, #FF1876 54.17%, #BB0CB2 100%);
      mix-blend-mode: normal;
      opacity: 0.3;
      position: absolute;
      bottom: 0;
    }
    
    .header_cart{
      position: relative;
      display: flex;
      font-size: 15px;
      line-height: 13px; 
      color: #C90EA5;
      justify-content: flex-end;
      .header_cart-counter{
        position: absolute;
        width: 16px; 
        border-radius: 50%;
        overflow: hidden;
        background-color: #FF1876;
        color: #fff;
        line-height: 1;
        font-size: 12px;
        text-align: center;
        padding: 2px 3px;
        display: inline-block;
        top: -6px;
        right: -7px;
      } 
    }
    .header_logo{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      p{
        margin: 0;
        font-size: 20px;
        color: #5A1094;
        padding-left: 10px;
      }
    }
  }
`;
