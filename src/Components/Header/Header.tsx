import React from 'react';
import styled from 'styled-components';
import {Row, Container, Col} from 'react-bootstrap'
import CartImg from '../../static/cart.svg'

const Header:React.FC = () => {

    return (
        <HeaderComponent className="header">
            <Container>
                <Row>
                    <Col xs={12} lg={8}>

                    </Col>
                    <Col className="d-flex header_cart" xs={12} lg={4}>
                        cart
                        {CartImg}
                        <span className="header_cart-counter">
                            3
                        </span>
                    </Col>
                </Row>
            </Container>
        </HeaderComponent>
    )
}

export default Header;

const HeaderComponent = styled.header`
  &.header{
    &_cart{
      position: relative;
      .header_cart-counter{
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #FF1876; 
      }
      
    }
  }
`;
