import styles from './styles.module.css';

const FormWave = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h1 style={{ textAlign: 'center' }}>Please Login</h1>
        <div className={styles.block}>
          <input className={styles.input} />
          <div className={styles.placeholder}>
            {['E', 'm', 'a', 'i', 'l'].map((v, i) => (
              <span key={v} style={{ transitionDelay: 50 * i + 'ms' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <input className={styles.input} />
          <div className={styles.placeholder}>
            {['P', 'a', 's', 's', 'w', 'o', 'r', 'd'].map((v, i) => (
              <span key={v} style={{ transitionDelay: 50 * i + 'ms' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.btn}>Login</button>
        <div>
          Don't have an account?
          <span style={{ color: 'lightblue', marginLeft: 4 }}>Register</span>
        </div>
      </div>
    </div>
  );
};
export default FormWave;
