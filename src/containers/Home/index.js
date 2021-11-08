import React from 'react';
import styles from './styles.module.css';
import Panel from '../../components/Home/Panel';
import { Switch, Route } from 'react-router-dom';
import ExpandingCards from '../ExpandingCards';
import ProgressSteps from '../ProgressSteps';
import RotatingNavigationAnimation from '../RotatingNavigationAnimation';
import HiddenSearchWidget from '../HiddenSearchWidget';
import BlurryLoading from '../BlurryLoading';
import ScrollAnimation from '../ScrollAnimation';
import SplitLandingPage from '../SplitLandingPage';
import FormWave from '../FormWave';
import SoundBoard from '../SoundBoard';
import DadJokes from '../DadJokes';

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
    {
      title: 'Rotating Navigation Animation',
      comp: RotatingNavigationAnimation,
      photoUrl:
        'https://50projects50days.com/img/projects-img/3-rotating-navigation-animation.png',
    },
    {
      title: 'Hidden Search Widget',
      comp: HiddenSearchWidget,
      photoUrl:
        'https://50projects50days.com/img/projects-img/4-hidden-search-widget.png',
    },
    {
      title: 'Blurry Loading',
      comp: BlurryLoading,
      photoUrl:
        'https://50projects50days.com/img/projects-img/5-blurry-loading.png',
    },
    {
      title: 'Scroll Animation',
      comp: ScrollAnimation,
      photoUrl:
        'https://50projects50days.com/img/projects-img/6-scroll-animation.png',
    },
    {
      title: 'Split Landing Page',
      comp: SplitLandingPage,
      photoUrl:
        'https://50projects50days.com/img/projects-img/7-split-landing-page.png',
    },
    {
      title: 'Form Wave',
      comp: FormWave,
      photoUrl: 'https://50projects50days.com/img/projects-img/8-form-wave.png',
    },
    {
      title: 'Sound Board',
      comp: SoundBoard,
      photoUrl: 'https://50projects50days.com/img/projects-img/9-sound-board.png',
    },
    {
      title: 'Dad Jokes',
      comp: DadJokes,
      photoUrl: 'https://50projects50days.com/img/projects-img/10-dad-jokes.png',
    },
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
