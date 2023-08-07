import Image from 'next/image';
import styles from './Card.module.css';
import CardProps from './CardProps';

export default function Card({
  title,
  description,
  activeCard,
  image,
  bigImage,
  imageAlt,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={activeCard ? styles.activeContainer : styles.container}
    >
      <Image
        className={styles.image}
        src={activeCard ? bigImage : image}
        alt={imageAlt}
      ></Image>
      {/* <div
        className={activeCard ? styles.activeImage : styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div> */}
      <div className={activeCard ? styles.activeHeader : ''}>
        <h2>{title}</h2>
        {activeCard ? <p>{description}</p> : null}
      </div>
      {activeCard ? (
        <a onClick={(e) => e.preventDefault()}>Conferir &gt;</a>
      ) : null}
    </div>
  );
}
