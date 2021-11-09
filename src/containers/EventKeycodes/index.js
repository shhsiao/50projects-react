import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const EventKeycodes = () => {
  const [key, setKey] = useState(null);
  const handleKeydown = (e) =>
    setKey({ key: e.key, keyCode: e.keyCode, code: e.code });

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);
  return (
    <div className={styles.wrapper}>
      {key ? (
        <div className={styles.content}>
          {['key', 'keyCode', 'code'].map((v) => {
            return (
              <div className={styles.info} key={v}>
                <div className={styles.title}>{`event.${v}`}</div>
                <div className={styles.key}>{key[v]}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.key}>Press any key to get the keyCode</div>
      )}
    </div>
  );
};

export default EventKeycodes;
