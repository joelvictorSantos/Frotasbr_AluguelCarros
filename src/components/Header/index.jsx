import React from "react";
import Logoimg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaUser, FaCar } from 'react-icons/fa';
import { 
  Container, 
  Logo, 
  Menu 
} from "./styles"

const Header = () => {
  return (
    <Container>
          <Logo>
            <Link to="/"><img src={Logoimg} alt="" /> </Link>
            <div>
              <h1>FrotasBr</h1>
              <h2>aluguel de carros</h2>
            </div>
          </Logo>
          <Menu>
            <ul>
               <li>
              <icon>
               <FaCar />
              </icon>
              <Link to="/perfil">
               <h1>Minhas Reservas</h1>
              </Link>
              </li>
              <li>
              <icon><FaUser /></icon>
                <Link to="/login"><span>Login <b>|</b> Cadastrar</span></Link>
              </li>
            </ul>
          </Menu>
      
    </Container>
  );
}

export default Header
