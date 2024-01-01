import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Baysal</div>
      <div className={styles.text}>
        Oğuzhan Baysal © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
