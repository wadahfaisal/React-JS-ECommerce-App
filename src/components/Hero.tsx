import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import styles from "../scss/components/hero.module.scss";

const Hero = () => {
  return (
    // <section className="home-hero section-center">
    <section className={styles.homeHero}>
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
        <Link to="/products" className={styles.heroBtn}>
          shop now
        </Link>
      </article>
      <article className={styles.imgContainer}>
        <img src={heroBcg} alt="nice table" className={styles.mainImg} />
        <img src={heroBcg2} alt="person working" className={styles.accentImg} />
      </article>
    </section>
  );
};

export default Hero;
