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
    asideColor: '#F98988',
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
      <AsideNavigation color={background.asideColor} />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${background.image})` }}
      ></div>
      <h1>Desafio Mudança União</h1>
      <section className={styles.cardsContainer}>
        <Card
          title="Korea Camp"
          description="Imersão na cultura inglesa levando esperança"
          image={'/../public/images/Julio.webp'}
          imageAlt="Julio"
          width={'68.5%'}
          height={'193.4%'}
          activeWidth={'61%'}
          activeHeight={'201%'}
          top="-66%"
          left="-22%"
          activeTop="-78%"
          activeLeft="-15%"
          order={order.first}
          onClick={() => {
            if (clickEnabled && order.first != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
                image: '/images/32.webp',
                asideColor: '#F98988',
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
          width={'111%'}
          height={'221%'}
          activeWidth={'90.5%'}
          activeHeight={'212.5%'}
          top="-90%"
          left="-36%"
          activeTop="-87%"
          activeLeft="-25%"
          imageAlt="Missionario Voluntário"
          order={order.second}
          onClick={() => {
            if (clickEnabled && order.second != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #52D1FB 0%, #3183C9 100%)',
                image: '/images/gnc1.webp',
                asideColor: '#3183C9',
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
          width={'111.5%'}
          height={'149.5%'}
          activeWidth={'98.5%'}
          activeHeight={'144%'}
          imageAlt="World Camp"
          top="-14%"
          left="-12%"
          activeTop="-24%"
          activeLeft="-9%"
          order={order.third}
          onClick={() => {
            if (clickEnabled && order.third != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #FFFCAA 0%, #BEB700 100%)',
                image: '/images/wc2.webp',
                asideColor: '#BEB700',
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
          width={'73%'}
          height={'167%'}
          activeWidth={'65.1%'}
          activeHeight={'182%'}
          imageAlt="Thayse"
          top="-34%"
          left="-18%"
          activeTop="-64%"
          activeLeft="-13%"
          order={order.fourth}
          onClick={() => {
            if (clickEnabled && order.fourth != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #70DCAF 0%, #0B956B 100%)',
                image: '/images/mo.webp',
                asideColor: '#0B956B',
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
          width={'80%'}
          height={'128%'}
          activeWidth={'82.3%'}
          activeHeight={'156.3%'}
          imageAlt="Voluntária"
          top="-21%"
          left="-16%"
          activeTop="-53%"
          activeLeft="-13.5%"
          order={order.fifth}
          onClick={() => {
            if (clickEnabled && order.fifth != 1) {
              setBackground({
                color:
                  'radial-gradient(closest-side at 50% 50%, #7DB9FF 0%, #216AE8 100%)',
                image: '/images/ec-2.webp',
                asideColor: '#216BE8',
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
      </section>
    </main>
  );
}
