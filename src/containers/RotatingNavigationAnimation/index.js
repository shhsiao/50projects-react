import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faUser,
  faHome,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RotatingNavigationAnimation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}>
        <div
          className={styles.circlContent}
          style={{ transform: isOpen && 'rotate(-90deg)' }}
        >
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            size="2x"
            className={styles.open}
            onClick={() => setOpen(true)}
          />
          <FontAwesomeIcon
            icon={faTimes}
            color="white"
            size="2x"
            className={styles.close}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
      <div
        className={styles.content}
        style={{ transform: isOpen && 'rotate(-20deg)' }}
      >
        <div className={styles.title}>Amazing Article</div>
        <div className={styles.author}>Florin Pop</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
          dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur
          mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem
          provident natus veritatis molestiae cumque quod voluptates ab non,
          tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium
          iure aliquam rerum sint nam quas dolor dignissimos in error placeat
          quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
          voluptates laudantium. Ducimus consequuntur perferendis consequatur
          nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
          tenetur nemo ipsa.
        </p>
        <h3>My Dog</h3>
        <img
          width="100%"
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="doggy"
        ></img>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
          facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </div>
      {isOpen && (
        <nav className={styles.nav}>
          {[
            { title: 'HOME', icon: faHome },
            { title: 'ABOUT', icon: faUser },
            { title: 'CONTACT', icon: faMailBulk },
          ].map((v) => (
            <div className={styles.li} key={v.title}>
              <FontAwesomeIcon icon={v.icon} />
              <span className={styles.des}>{v.title}</span>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default RotatingNavigationAnimation;
