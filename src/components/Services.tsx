import { services } from "../utils/constants";
import styles from "../scss/components/services.module.scss";

const Services = () => {
  return (
    <section className={styles.homeServices}>
      <div className={styles.sectionCenter}>
        {/* <div className="section-center"> */}
        <article className={styles.header}>
          <h3>
            custom furniture
            <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            error impedit animi obcaecati amet nesciunt ipsum aspernatur,
            dignissimos dolorum non!
          </p>
        </article>
        <div className={styles.servicesCenter}>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className={styles.service}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
