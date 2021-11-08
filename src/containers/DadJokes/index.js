import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DadJokes = () => {
  const fetchJoke = () => {
    fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((v) => v.json())
      .then((data) => {
        setJoke(data.joke);
      });
  };
  const [joke, setJoke] = useState('');
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>Don't Laugh Challenge</h3>
        <div className={styles.content}>{joke}</div>
        <button className={styles.btn} onClick={fetchJoke}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
