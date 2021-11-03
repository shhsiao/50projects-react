import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const Block = ({ idx }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  return (
    <div
      className={styles.block}
      ref={ref}
      style={
        !onScreen
          ? {
              transform: idx % 2 ? 'translateX(700px)' : 'translateX(-700px)',
            }
          : {}
      }
    >
      <div className={styles.content}>Content</div>
    </div>
  );
};

const ScrollAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Scroll to see the animation</h1>
      {Array(10)
        .fill(0)
        .map((v, i) => (
          <Block key={i} idx={i} />
        ))}
    </div>
  );
};

export default ScrollAnimation;

// IntersectionObserver hook from https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
};
