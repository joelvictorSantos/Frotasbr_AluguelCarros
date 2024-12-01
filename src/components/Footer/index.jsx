import React, { Fragment } from "react";
import { Container, Item, Logo, Copy} from "./styles";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import Logoimg from "../../assets/logo.png";

const Footer = () => {
  return (
    <Fragment>
        <Container>
        <Item>
            <Logo>
            <img src={Logoimg} alt="" />
            <div>
              <h1>FrotasBr</h1>
              <h2>aluguel de carros</h2>
            </div>
            </Logo>
            <p>O site FrotasBr é simplesmente uma simulação baseado nas grandes 
                locadoras de veiculos do mercado brasileiro</p>
            <nav>
                <ul>
                <li><span>
                 <a href="https://github.com/joelvictorSantos" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
                </a></span></li>
                <li><span>
                 <a href="https://www.linkedin.com/in/joel-victor-brand%C3%A3o-dos-santos-188ab7272/?originalSubdomain=br" target="_blank" rel="noopener noreferrer"> 
                <FaLinkedin size={32} />
                </a></span></li>
                </ul>
            </nav>
        </Item>
    </Container>
    <Copy>
        <p>@FrotasBr 2024</p>
        <ul>
            <li>
                <span>Termos de Uso</span>
            </li>
            <li>
                <span>Política de Privacidade</span>
            </li>
            <li>
                <span>Política de Cookies</span>
            </li>
        </ul>
    </Copy>
    </Fragment>
  );
}

export default Footer
