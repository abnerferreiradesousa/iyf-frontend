'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Card from './components/Card';

export default function Home() {
  const [background, setBackground] = useState({
    color: 'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
    image: '/images/32.webp',
  });

  return (
    <main className={styles.main} style={{ background: background.color }}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${background.image})` }}
      ></div>
      <h1>Desafio Mudança União</h1>
      <div className={styles.cardsContainer}>
        <Card
          title="Korea Camp"
          description="Imersão na cultura inglesa levando esperança"
          big={true}
          imageUrl="/images/Julio.webp"
          onClick={() =>
            setBackground({
              color:
                'radial-gradient(closest-side at 50% 50%, #FEC1C3 0%, #F98988 100%)',
              image: '/images/32.webp',
            })
          }
        ></Card>
        <Card
          title="Good News Corp"
          description="Vendo a minha juventude para comprar o coração deles"
          big={false}
          imageUrl="/images/Missionario.webp"
          onClick={() =>
            setBackground({
              color:
                'radial-gradient(closest-side at 50% 50%, #bdd5f2 0%, #588eea 100%)',
              image: '/images/gnc1.webp',
            })
          }
        ></Card>
        <Card
          title="World Camp"
          description="Viaje o mundo em um só lugar!"
          big={false}
          imageUrl="/images/WorldCamp.webp"
          onClick={() =>
            setBackground({
              color:
                'radial-gradient(closest-side at 50% 50%, #FFFCAA 0%, #BEB700 100%)',
              image: '/images/wc2.webp',
            })
          }
        ></Card>
        <Card
          title="Noite Cultural"
          description="Viaje o mundo em uma noite sem sair do lugar!"
          big={false}
          imageUrl="/images/Thayse.webp"
          onClick={() =>
            setBackground({
              color:
                'radial-gradient(closest-side at 50% 50%, #70DCAF 0%, #0B956B 100%)',
              image: '/images/mo.webp',
            })
          }
        ></Card>
        <Card
          title="English Camp"
          description="Ganhe esperança English Camp Online 2022"
          big={false}
          imageUrl="/images/Voluntaria.webp"
          onClick={() =>
            setBackground({
              color:
                'radial-gradient(closest-side at 50% 50%, #7DB9FF 0%, #216AE8 100%)',
              image: '/images/ec-2.webp',
            })
          }
        ></Card>
      </div>
    </main>
  );
}
