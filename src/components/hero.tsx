import "../scss/hero.scss";

import Web3Mobile from "../assets/images/image-web-3-mobile.jpg";
import Web3Desktop from "../assets/images/image-web-3-desktop.jpg";

export default function Hero() {
  return (
    <div className="Hero Main-grid__hero">
      <picture>
        <source srcSet={Web3Desktop} media="(min-width: 42.5rem)" />
        <img className="Hero__image" src={Web3Mobile} alt="Composition of colorful 3D geometric blocks" />
      </picture>

      <div className="Hero__content">
        <h1 className="Hero__content-title">The Bright Future of Web 3.0?</h1>

        <p className="Hero__content-paragraph">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
        </p>

        <button className="Hero__button" type="button">Read more</button>
      </div>
    </div>
  );
}