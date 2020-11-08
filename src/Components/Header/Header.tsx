import React from 'react';
import styled from 'styled-components';
// import {Row, Container, Col} from 'react-bootstrap'

import {Container, Grid} from 'semantic-ui-react';
import CartImg from '../../static/cart.svg'

const Header: React.FC = () => {

    return (
        <HeaderComponent className="header">
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column className="d-flex header_cart">
                            cart
                            {CartImg}
                            <span className="header_cart-counter">
                            3
                        </span>
                        </Grid.Column>
                        <Grid.Column>

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
