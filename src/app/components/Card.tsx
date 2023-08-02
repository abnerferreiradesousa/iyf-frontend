import styles from './Card.module.css';
import CardProps from './CardProps';

export default function Card({
  title,
  description,
  big,
  imageUrl,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={big ? styles.containerBig : styles.containerSmall}
    >
      <div
        className={big ? styles.imageBig : styles.imageSmall}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={big ? styles.textHeaderBig : ''}>
        <h2>{title}</h2>
        {big ? <p>{description}</p> : null}
      </div>
      {big ? <a onClick={(e) => e.preventDefault()}>Conferir &gt;</a> : null}
    </div>
  );
}
