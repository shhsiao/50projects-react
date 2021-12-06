import { useState } from 'react';
import styles from './styles.module.css';

const Chip = ({ text }) => {
  return <span className={styles.chip}>{text}</span>;
};
const RandomChoicePircker = () => {
  const [text, setText] = useState('');
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          Enter all of the choices divided by a comma (','). Press enter when
          you're done
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Enter choices here..."
          onChange={(e) => setText(e.currentTarget.value)}
          value={text}
          autoFocus
        ></textarea>
        {text &&
          text
            .split(',')
            .filter((v) => v)
            .map((v, i) => <Chip text={v} key={v + i} />)}
      </div>
    </div>
  );
};

export default RandomChoicePircker;
