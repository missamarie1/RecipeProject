import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="key">
        <h3> Key: </h3>
        <div>
          <p>Vegan: </p>
          <span
            className="iconify V"
            data-icon="emojione-monotone:letter-v"
          ></span>
        </div>
        <div>
          <p>Dairy Free: </p>
          <span className="iconify dairy" data-icon="mdi:cow-off"></span>
        </div>
        <div>
          <p>Gluten Free: </p>
          <span className="iconify GF" data-icon="mdi:barley-off"></span>
        </div>
        <div>
          <p>Vegetarian: </p>
          <span className="iconify veggie" data-icon="charm:plant-pot"></span>
        </div>
      </div>

      <div className="Socials">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Footer;
