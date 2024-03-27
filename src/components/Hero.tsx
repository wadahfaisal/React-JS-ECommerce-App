import { Link } from "react-router-dom";
// import heroBcg from "../assets/hero-bcg.jpeg";
// import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import heroBcg from "../assets/product.jpg";

const Hero = () => {
  return (
    <section className="home-hero">
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        {/* <img src={heroBcg2} alt="person working" className="accent-img" /> */}
      </article>
      <article className="content">
        <h1>
          design your
          <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a esse
          repudiandae odio, saepe sequi sunt aliquid doloribus? Ullam, optio!
        </p>
        <Link to="/products" className="hero-btn">
          shop now
        </Link>
      </article>
    </section>
  );
};

export default Hero;
