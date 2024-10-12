import styles from "../css/footer.module.css";

const socialLinks = [
  {
    id: 1,
    url: "#",
    logo: "/images/facebook-logo.png",
    alt: "facebook-logo",
  },
  {
    id: 2,
    url: "#",
    logo: "/images/x-logo.png",
    alt: "x-logo",
  },
  {
    id: 3,
    url: "#",
    logo: "/images/tiktok-logo.png",
    alt: "tiktok-logo",
  },
  {
    id: 4,
    url: "#",
    logo: "/images/instagram-logo.png",
    alt: "instagram-logo",
  },
];

const legalLinks = [
  {
    id: 1,
    url: "#",
    text: "Políticas de Privacidad",
  },
  {
    id: 2,
    url: "#",
    text: "Términos y de uso",
  },
  {
    id: 3,
    url: "#",
    text: "Contacto",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>Siguenos en nuestras redes sociales</p>

        {/* Social Links */}
        <nav>
          <ul className={styles.social__links}>
            {socialLinks.map(({ id, url, logo, alt }) => {
              return (
                <li key={id}>
                  <a href={url}>
                    <img src={logo} alt={alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <p>&copy; 2024 My Market. Todos los derechos reservados.</p>

        {/* Legal Links */}
        <nav>
          <ul className={styles.legal__links}>
            {legalLinks.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
