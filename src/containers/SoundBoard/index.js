import styles from './styles.module.css';

const SoundBoard = () => {
  const playNameList = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const playList = playNameList.map(
    (v) =>
      new Audio(
        `https://50projects50days.com/projects/sound-board/sounds/${v}.mp3`
      )
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.constent}>
        {playList.map((v, i) => (
          <button
            className={styles.btn}
            onClick={() => {
              playList.forEach((song) => {
                song.pause();
                song.currentTime = 0;
              });
              v.play();
            }}
          >
            {playNameList[i]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundBoard;
