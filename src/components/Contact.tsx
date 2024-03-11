import styles from "../scss/components/contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.homeContact}>
      <div className="section-center">
        <h3>join our newsletter and get 20% off</h3>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            aperiam. Error nisi cumque repellat, perspiciatis quam a accusamus
            voluptas consequuntur.
          </p>
        </div>
        <form className={styles.contactForm}>
          <input
            type="email"
            className={styles.formInput}
            placeholder="enter email"
          />
          <button type="submit" className={styles.submitBtn}>
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
