import React from 'react';
import styled from "styled-components";
import {
    Link
} from "react-router-dom";

const Breadscrumbs: React.FC = () => {
    const LIST = [
        {
            name: 'Shipping',
            link: 'shipping',
        }, {
            name: 'Billing',
            link: 'billing',
        }, {
            name: 'Payment',
            link: 'payment',
        }
    ];
    return (
        <BreadscrumbsComponent>
            <ul>
                {
                    LIST.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </BreadscrumbsComponent>
    )
}

export default Breadscrumbs;
const BreadscrumbsComponent = styled.div`
  ul{
    margin: 0;
    padding: 0;
    display: flex;
    li{
      
      list-style: none;
      position: relative;
      &:before{
        content: "";
        position: absolute;
        display: block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBjZI9a4NAGMe90yh0CRQkGZoSClWoQ5cuGTr4aXRy8AuImx9ARf0yQheHppDu0lVcO1Twtc+FWtrE3Pkf7ri7/+/ueTkuCIK17/saN1OIDFEUPcK0UFX1oOt6SwMwGUzTfIepyfN8l6apwHxhFISmSJK06vv+zTCMLyYwQoIgbBBC2RSEpm6hQZMADboIEEHJNzzPK3Vdv1qW9ckEfqD1MAwaFOIIMQEiz/OWoOemaV7wHECW5S3k8jGGRVWSJBr8hKdxjRlmpW3b66IoDuMeYphXZVlmruu2VICYu667qaoqs227+nvGn5rDMLyDMt5Omc9yII2Camwvmf8BpEEY43ua+ReI43gpiuIDNGZPMx8BMC8g5h3cvJ/VGCLHca64mfoG1HuWJUWdtpgAAAAASUVORK5CYII=);
        background-repeat: no-repeat!important;
        width: 10px;
        height: 19px;
        top: 0;
        left: -10px;
      }
      a{
        text-decoration: none;
        font-size: 12px;
        line-height: 14px;  
        color: #979797;
        padding: 0 20px;
      }
      &.active{
       a{
         color: #5A1094;
        }
      }
      &:first-child{
        a{
          padding-left: 0;
        }
        &:before{
          display: none;
        } 
      }
     
    }
  }
`;