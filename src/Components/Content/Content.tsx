import React, { memo, ReactNode } from 'react';
import Breadscrumbs from "../Breadscrumbs/Breadscrumbs";
import styled from "styled-components";
interface ContentInterface {
    children: ReactNode
}
const Content: React.FC<ContentInterface> = ({children}) => (
    <ContentComponent>
        <Breadscrumbs/>
        {children}
    </ContentComponent>
)
export default memo(Content);
const ContentComponent = styled.div`
  background-color: #fff;
  padding: 23px 40px;
  
  h1{
    font-size: 26px;
    line-height: 31px; 
    color: #5A1094;
    margin-bottom: 20px;
  }
`;