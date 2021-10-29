import React from 'react';
import styles from './styles.module.css';
import Panel from '../../components/Home/Panel';
import { Switch, Route } from 'react-router-dom';
import ExpandingCards from '../ExpandingCards';
import ProgressSteps from '../ProgressSteps';

const Home = () => {
  const projectList = [
    {
      title: 'Expanding Cards',
      comp: ExpandingCards,
      photoUrl:
        'https://50projects50days.com/img/projects-img/1-expanding-cards.png',
    },
    {
      title: 'Pregress Steps',
      comp: ProgressSteps,
      photoUrl:
        'https://50projects50days.com/img/projects-img/2-progress-steps.png',
    },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const getSwitch = () => {
    const getRouteList = () =>
      projectList
        .filter((v) => v)
        .map((v, i) => {
          return (
            <Route key={v.title} path={`/day${i + 1}`}>
              {React.createElement(v.comp, null, null)}
            </Route>
          );
        });
    return (
      <Switch>
        {getRouteList()}
        <Route path="/">
          <div className={styles.wrapper}>
            {projectList.map((v, i) => (
              <Panel
                title={v?.title}
                comp={v?.comp}
                dayNum={i + 1}
                photoUrl={v?.photoUrl}
                key={i}
              />
            ))}
          </div>
        </Route>
      </Switch>
    );
  };

  return <>{getSwitch()}</>;
};

export default Home;
