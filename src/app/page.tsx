'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from './components/Card/Card';
import AsideNavigation from './components/AsideNavigation/AsideNavigation';
import Header from './components/Header/Header';
import Slider from 'react-slick';
import Julio from '../../public/images/Julio.webp';
import Missionario from '../../public/images/Missionario.webp';
import WorldCamp from '../../public/images/WorldCamp.webp';
import Thayse from '../../public/images/Thayse.webp';
import Voluntaria from '../../public/images/Voluntaria.webp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [background, setBackground] = useState({
    color: 'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
    image: '/images/32.webp',
  });
  const [activeCard, setActiveCard] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });
  const [clickEnabled, setClickEnabled] = useState(true);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    swipe: false,
    // variableWidth: true,
    className: 'slider',
  };

  return (
    <main className={styles.main} style={{ background: background.color }}>
      <Header />
      <AsideNavigation />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${background.image})` }}
      ></div>
      <h1>Desafio Mudança União</h1>
      <Slider {...settings}>
        <Card
          title="Korea Camp"
          description="Imersão na cultura inglesa levando esperança"
          activeCard={activeCard.first}
          image={Julio}
          bigImage={Julio}
          imageAlt="Julio"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
                image: '/images/32.webp',
              });
              setActiveCard({
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Good News Corp"
          description="Vendo a minha juventude para comprar o coração deles"
          activeCard={activeCard.second}
          image={Missionario}
          bigImage={Missionario}
          imageAlt="Missionario Voluntário"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #bdd5f2 0%, #588eea 100%)',
                image: '/images/gnc1.webp',
              });
              setActiveCard({
                first: false,
                second: true,
                third: false,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="World Camp"
          description="Viaje o mundo em um só lugar!"
          activeCard={activeCard.third}
          image={WorldCamp}
          bigImage={WorldCamp}
          imageAlt="World Camp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FFFCAA 0%, #BEB700 100%)',
                image: '/images/wc2.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: true,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Noite Cultural"
          description="Viaje o mundo em uma noite sem sair do lugar!"
          activeCard={activeCard.fourth}
          image={Thayse}
          bigImage={Thayse}
          imageAlt="Thayse"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #70DCAF 0%, #0B956B 100%)',
                image: '/images/mo.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: false,
                fourth: true,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="English Camp"
          description="Ganhe esperança English Camp Online 2022"
          activeCard={activeCard.fifth}
          image={Voluntaria}
          bigImage={Voluntaria}
          imageAlt="Voluntária"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #7DB9FF 0%, #216AE8 100%)',
                image: '/images/ec-2.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: true,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Korea Camp"
          description="Imersão na cultura inglesa levando esperança"
          activeCard={activeCard.first}
          imageUrl="/images/Julio.webp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
                image: '/images/32.webp',
              });
              setActiveCard({
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Good News Corp"
          description="Vendo a minha juventude para comprar o coração deles"
          activeCard={activeCard.second}
          imageUrl="/images/Missionario.webp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #bdd5f2 0%, #588eea 100%)',
                image: '/images/gnc1.webp',
              });
              setActiveCard({
                first: false,
                second: true,
                third: false,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="World Camp"
          description="Viaje o mundo em um só lugar!"
          activeCard={activeCard.third}
          imageUrl="/images/WorldCamp.webp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FFFCAA 0%, #BEB700 100%)',
                image: '/images/wc2.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: true,
                fourth: false,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Noite Cultural"
          description="Viaje o mundo em uma noite sem sair do lugar!"
          activeCard={activeCard.fourth}
          imageUrl="/images/Thayse.webp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #70DCAF 0%, #0B956B 100%)',
                image: '/images/mo.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: false,
                fourth: true,
                fifth: false,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="English Camp"
          description="Ganhe esperança English Camp Online 2022"
          activeCard={activeCard.fifth}
          imageUrl="/images/Voluntaria.webp"
          onClick={() => {
            if (clickEnabled) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #7DB9FF 0%, #216AE8 100%)',
                image: '/images/ec-2.webp',
              });
              setActiveCard({
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: true,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
      </Slider>
    </main>
  );
}
