import styles from './styles.module.css';
import { Link } from 'react-router-dom';
const Panel = ({ title, dayNum, photoUrl }) => {
  if (!title) {
    return <div className={styles.wrapper}>To be continued.</div>;
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={photoUrl} alt={title} height="100%" width="100%"/>
      <div className={styles.day}>Day {dayNum}</div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <Link to={`/day${dayNum}`}>
          <button className={styles.btn}>Live Demo</button>
        </Link>
      </div>
    </div>
  );
};
export default Panel;
