import styles from './styles.module.css';
import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HiddenSearchWidget = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.widget}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.input}
          style={{
            maxWidth: isOpen ? 200 : 0,
            margin: isOpen ? 4 : 0,
          }}
        />
        <div className={styles.icon} onClick={() => setOpen((v) => !v)}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
