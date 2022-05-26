import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/spoonacular?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
