import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const BlurryLoading = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress > 99) {
      return;
    }
    setTimeout(() => {
      setProgress((v) => v + 1);
    }, 30);
  }, [progress]);
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ filter: `blur(${scale(progress, 0, 100, 30, 0)}px)` }}
      ></div>
      <div
        className={styles.progress}
        style={{ opacity: scale(progress, 0, 100, 1, 0) }}
      >
        {progress}%
      </div>
    </>
  );
};

export default BlurryLoading;
