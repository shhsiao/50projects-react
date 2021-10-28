import { useState } from 'react';
import styles from './styles.module.css';

const ExpandingCards = () => {
  const [isExpanded, setExpanded] = useState('1558979158-65a1eaa08691');
  const photoList = [
    { url: '1558979158-65a1eaa08691', title: 'Explore The World' },
    { url: '1572276596237-5db2c3e16c5d', title: 'Wild Forest' },
    { url: '1507525428034-b723cf961d3e', title: 'Sunny Beach' },
    { url: '1551009175-8a68da93d5f9', title: 'City on Winter' },
    { url: '1549880338-65ddcdfd017b', title: 'Mountains - Clouds' },
  ];
  return (
    <div className={styles.wrapper}>
      {photoList.map((v) => (
        <div
          key={v.url}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-${v.url}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1350&q=80')`,
            backgroundSize: 'cover',
          }}
          className={`${styles.panel} ${
            isExpanded === v.url && styles.expanded
          }`}
          onClick={() => setExpanded(v.url)}
        >
          {isExpanded === v.url && (
            <h3 className={`${styles.title} ${styles.fade}`}>{v.title}</h3>
          )}
        </div>
      ))}
    </div>
  );
};
export default ExpandingCards;
