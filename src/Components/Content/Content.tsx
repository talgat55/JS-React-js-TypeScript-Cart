import React from 'react';
import Breadscrumbs from "../Breadscrumbs/Breadscrumbs";
import styled from "styled-components";
const Content: React.FC = () => (
    <ContentComponent>
        <Breadscrumbs/>
    </ContentComponent>
)
export default Content;
const ContentComponent = styled.div`
  background-color: #fff;
  padding: 23px 40px;
`;