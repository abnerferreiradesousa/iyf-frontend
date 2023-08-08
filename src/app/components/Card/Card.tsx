import Image from 'next/image';
import styles from './Card.module.css';
import CardProps from './CardProps';

export default function Card({
  title,
  description,
  image,
  imageAlt,
  width,
  height,
  activeWidth,
  activeHeight,
  top,
  left,
  activeTop,
  activeLeft,
  order,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={order == 1 ? styles.activeContainer : styles.container}
      style={{ order: order }}
    >
      <Image
        className={styles.image}
        src={image}
        alt={imageAlt}
        width={order == 1 ? activeWidth : width}
        height={order == 1 ? activeHeight : height}
        style={{
          top: order == 1 ? activeTop : top,
          left: order == 1 ? activeLeft : left,
        }}
      ></Image>
      <div className={order == 1 ? styles.activeHeader : ''}>
        <h2>{title}</h2>
        {order == 1 ? <p>{description}</p> : null}
      </div>
      {order == 1 ? (
        <a onClick={(e) => e.preventDefault()}>Conferir &gt;</a>
      ) : null}
    </div>
  );
}
