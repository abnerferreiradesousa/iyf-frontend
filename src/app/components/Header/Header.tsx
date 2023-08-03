import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
      <header className={styles.headerContainer}>
        <section className={styles.headerLogo}>
          <Image
            width={176}
            height={50}
            quality={100}
            src="/assets/iyf-full-logo-branco.png"
            alt="logo"
          />
        </section>

        <section className={styles.headerSocial}>
          <Image
            width={24}
            height={24}
            src="/assets/Youtube.png"
            alt="logo"
          />
          <Image
            width={24}
            height={24}
            src="/assets/facebook.png"
            alt="logo"
          />
          <Image
            width={24}
            height={24}
            src="/assets/Instagram.png"
            alt="logo"
          />
        </section>
      </header>
  )
}

export default Header
