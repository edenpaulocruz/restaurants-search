import React, { useState } from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card } from '../../components';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { GlobalStyle, Container, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurant Finder" />
          <TextField
            label="Pesquisar restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Slider {...settings}>
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
            <Card photo={restaurante} title="Nome do restaurante" />
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
