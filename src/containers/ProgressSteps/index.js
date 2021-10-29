import styles from './styles.module.css';
import { useState } from 'react';

const ProgressSteps = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.progress}>
          <div
            className={styles.line}
            style={{ width: 33.3 * (step - 1) + '%' }}
          />
          <div className={styles.grayLine} />
          <div className={`${styles.step} ${step >= 1 && styles.active}`}>
            1
          </div>
          <div className={`${styles.step} ${step >= 2 && styles.active}`}>
            2
          </div>
          <div className={`${styles.step} ${step >= 3 && styles.active}`}>
            3
          </div>
          <div className={`${styles.step} ${step >= 4 && styles.active}`}>
            4
          </div>
        </div>
        <div className={styles.btnList}>
          <button
            className={`${styles.btn} ${step === 1 && styles.forbidden}`}
            disabled={step === 1}
            onClick={() => setStep((v) => v - 1)}
          >
            Prev
          </button>
          <button
            className={`${styles.btn} ${step === 4 && styles.forbidden}`}
            disabled={step === 4}
            onClick={() => setStep((v) => v + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
