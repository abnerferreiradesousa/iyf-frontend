import Image from 'next/image';
import './Header.scss';

const Header = () => {
  return (
      <header className="header-container">
        <section className="header-logo">
          <Image
            width={290}
            height={80}
            quality={100}
            src="/assets/iyf-full-logo-branco.png"
            alt="logo"
          />
        </section>

        <section className="header-social-media">
          <Image
            width={44}
            height={44}
            style={{'borderRadius': '35%'}}
            src="/assets/Youtube.png"
            alt="logo"
          />
          <Image
            width={44}
            height={44}
            style={{'borderRadius': '35%'}}
            src="/assets/facebook.png"
            alt="logo"
          />
          <Image
            width={44}
            height={44}
            style={{'borderRadius': '35%'}}
            src="/assets/Instagram.png"
            alt="logo"
          />
        </section>
      </header>
  )
}

export default Header
