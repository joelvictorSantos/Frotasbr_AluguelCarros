import React, { Fragment } from "react";
import { Button, Header, Wrapper } from './styles';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner";
import HomeCard from '../../components/Card/HomeCard';

const Home = () => {
  return (
    <Fragment>
      <Banner />
        <Header>
            <h2>Conheça a nossa Frota</h2>
            <h3>Alugue os carros com os melhores preços!</h3>
        </Header>
        <Wrapper>
            <HomeCard />
        </Wrapper>
        
        <Header>
        <Link to="/managem">
        <Button><span>Veja todos os carros ➡</span></Button>
        </Link>
          </Header>
    </Fragment>
  );
}

export default Home
