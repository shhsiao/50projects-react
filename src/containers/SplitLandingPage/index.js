import styles from './styles.module.css';

const Panel = ({ background, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
      }}
      className={`${styles.panel} ${
        title.includes('XBox') ? styles.xbox : styles.sony
      }`}
    >
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.btn}>BUY NOW</div>
    </div>
  );
};

const SplitLandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Panel
        background="https://50projects50days.com/projects/split-landing-page/ps.jpg"
        title="Playstation 5"
      />
      <Panel
        background="https://50projects50days.com/projects/split-landing-page/xbox.jpg"
        title="XBox Series X"
      />
    </div>
  );
};

export default SplitLandingPage;
