import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImages from "../utils/heroImages";
// import heroBcg3 from "../assets/hero-bcg.jpeg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Hero = () => {
  const [images, setImages] = useState(heroImages);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > images.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="home-hero">
      {images.map((image, imageIndex) => {
        let position = "nextSlide";
        if (imageIndex === index) {
          position = "activeSlide";
        }
        if (
          imageIndex === index - 1 ||
          (index === 0 && imageIndex === images.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={`img-container ${position}`}>
            <img src={image} alt="hero image" className="main-img" />
          </article>
        );
      })}
      <div className="btn-container">
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>

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
