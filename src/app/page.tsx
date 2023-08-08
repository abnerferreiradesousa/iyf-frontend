'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from './components/Card/Card';
import AsideNavigation from './components/AsideNavigation/AsideNavigation';
import Header from './components/Header/Header';

export default function Home() {
  const [background, setBackground] = useState({
    color: 'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
    image: '/images/32.webp',
  });
  const [clickEnabled, setClickEnabled] = useState(true);
  const [order, setOrder] = useState({
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
  });

  return (
    <main className={styles.main} style={{ background: background.color }}>
      <Header />
      <AsideNavigation />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${background.image})` }}
      ></div>
      <h1>Desafio Mudança União</h1>
      <div className={styles.cardsContainer}>
        <Card
          title="Korea Camp"
          description="Imersão na cultura inglesa levando esperança"
          image={'/../public/images/Julio.webp'}
          imageAlt="Julio"
          width={167}
          height={493}
          activeWidth={313}
          activeHeight={906}
          top="-10.5rem"
          left="-4rem"
          activeTop="-22rem"
          activeLeft="-5rem"
          order={order.first}
          onClick={() => {
            if (clickEnabled && order.first != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
                image: '/images/32.webp',
              });
              setOrder({
                first: 1,
                second: order.second + 1,
                third: order.third + 1,
                fourth: order.fourth + 1,
                fifth: order.fifth + 1,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Good News Corp"
          description="Vendo a minha juventude para comprar o coração deles"
          image={'/../public/images/Missionario2x.webp'}
          width={272}
          height={563}
          activeWidth={464}
          activeHeight={958}
          top="-14rem"
          left="-6rem"
          activeTop="-25rem"
          activeLeft="-7.5rem"
          imageAlt="Missionario Voluntário"
          order={order.second}
          onClick={() => {
            if (clickEnabled && order.second != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #bdd5f2 0%, #588eea 100%)',
                image: '/images/gnc1.webp',
              });
              setOrder({
                first: order.first + 1,
                second: 1,
                third: order.third + 1,
                fourth: order.fourth + 1,
                fifth: order.fifth + 1,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="World Camp"
          description="Viaje o mundo em um só lugar!"
          image={'/../public/images/WorldCamp2x.webp'}
          width={273}
          height={381}
          activeWidth={505}
          activeHeight={650}
          imageAlt="World Camp"
          top="-2rem"
          left="-3rem"
          activeTop="-6rem"
          activeLeft="-3rem"
          order={order.third}
          onClick={() => {
            if (clickEnabled && order.third != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FFFCAA 0%, #BEB700 100%)',
                image: '/images/wc2.webp',
              });
              setOrder({
                first: order.first + 1,
                second: order.second + 1,
                third: 1,
                fourth: order.fourth + 1,
                fifth: order.fifth + 1,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="Noite Cultural"
          description="Viaje o mundo em uma noite sem sair do lugar!"
          image={'/../public/images/Thayse2x.webp'}
          width={179}
          height={426}
          activeWidth={344}
          activeHeight={819}
          imageAlt="Thayse"
          top="-5rem"
          left="-3rem"
          activeTop="-18rem"
          activeLeft="-5rem"
          order={order.fourth}
          onClick={() => {
            if (clickEnabled && order.fourth != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #70DCAF 0%, #0B956B 100%)',
                image: '/images/mo.webp',
              });
              setOrder({
                first: order.first + 1,
                second: order.second + 1,
                third: order.third + 1,
                fourth: 1,
                fifth: order.fifth + 1,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
        <Card
          title="English Camp"
          description="Ganhe esperança English Camp Online 2022"
          image={'/../public/images/Voluntaria2x.webp'}
          width={195}
          height={327}
          activeWidth={422}
          activeHeight={705}
          imageAlt="Voluntária"
          top="-3rem"
          left="-3rem"
          activeTop="-15rem"
          activeLeft="-4.5rem"
          order={order.fifth}
          onClick={() => {
            if (clickEnabled && order.fifth != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #7DB9FF 0%, #216AE8 100%)',
                image: '/images/ec-2.webp',
              });
              setOrder({
                first: order.first + 1,
                second: order.second + 1,
                third: order.third + 1,
                fourth: order.fourth + 1,
                fifth: 1,
              });
              setClickEnabled(false);
              setTimeout(() => setClickEnabled(true), 1000);
            }
          }}
        ></Card>
      </div>
    </main>
  );
}
