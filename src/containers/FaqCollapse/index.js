import { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Card = ({ question, answer, handleExpandClick, isExpanded }) => {
  return (
    <div className={`${styles.card} ${isExpanded && styles.expanded}`}>
      <div className={styles.question}>
        <div>{question}</div>
        <FontAwesomeIcon
          icon={isExpanded ? faTimes : faChevronDown}
          size="lg"
          className={styles.icon}
          onClick={handleExpandClick}
        />
      </div>
      {isExpanded && (
        <div style={{ textAlign: 'left', marginTop: 30 }}>{answer}</div>
      )}
    </div>
  );
};
const FaqCollapse = () => {
  const questions = [
    {
      question: `Why shouldn't we trust atoms?`,
      answer: `They make up everything`,
    },
    {
      question: `What do you call someone with no body and no nose?`,
      answer: `Nobody knows.`,
    },
    {
      question: `What's the object-oriented way to become wealthy?`,
      answer: `Inheritance.`,
    },
    {
      question: `How many tickles does it take to tickle an octopus?`,
      answer: `Ten-tickles`,
    },
    {
      question: `What is: 1 + 1?`,
      answer: `Depends on who are you asking.`,
    },
  ];
  const [expandList, setExpandList] = useState(
    Array(questions.length).fill(false)
  );
  const handleExpandClick = (i) => {
    const list = expandList.slice();
    list[i] = !list[i];
    setExpandList(list);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Frequently Asked Questions</h1>
        {questions.map((v, i) => {
          return (
            <Card
              key={v.question}
              question={v.question}
              answer={v.answer}
              handleExpandClick={() => handleExpandClick(i)}
              isExpanded={expandList[i]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FaqCollapse;
