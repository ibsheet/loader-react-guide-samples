import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { GrCodeSandbox } from 'react-icons/gr';
import StyleLink from '@material-ui/core/Link';
import { sectionClasses, topButtonClasses } from './Features/ViewStyle';

const Section = () => {
  const title = 'IBSheet8';
  const subTitle = 'Loader를 사용하여 IBSheet8의 대용량 조회, 높은 자유도, 다양한 렌더링 방식 등 다양한 기능을 React 환경에서 제공합니다.';
  const [scrollY, setScrollY] = useState(0);
  const classes = sectionClasses();
  const topBtnClasses = topButtonClasses();

  const scrollHandler = () => {
    const topButton = document.getElementsByClassName(topBtnClasses.topButtons)[0];
    setScrollY(window.scrollY);
    if (scrollY > 100) {
      topButton.style.opacity = 1;
      topButton.style.cursor = 'pointer';
    }
    else {
      topButton.style.opacity = 0;
      topButton.style.cursor = 'default';
    }
  };

  const handleTop = () => {
    if (scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setScrollY(0);
    }
  };

  useEffect(() => {
    if (scrollY < 100) {
      const topButton = document.getElementsByClassName(topBtnClasses.topButtons)[0];
      if (topButton.style.opacity === '1') {
        topButton.style.opacity = 0;
        topButton.style.cursor = 'default';
      }
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <>
      <div className={ classes.content }>
        <button className={ topBtnClasses.topButtons } onClick={ handleTop }>TOP</button>
        <Container>
          <div className={ classes.header }>
            <FontAwesomeIcon icon={ faTable } className={ classes.icon } size={ '3x' } />
            <span className={ classes.title }>
              { title }
            </span>
            <p className={ classes.subTitle }>
              { subTitle }
            </p>
            <div className={ classes.btnDiv }>
              <Button variant='contained' className={ classes.btnDivChild1 } href='https://codesandbox.io/s/github/ibsheet/loader-react-guide-samples/tree/main/samples?file=/src/index.js' target='_blank' >
                <GrCodeSandbox size='24' color='#fff' />
                <p className={ classes.gitp1 }>
                  SandBox
                </p>
              </Button>
              <StyleLink underline='none' color='inherit' href='https://github.com/ibsheet/loader-react-guide-samples/tree/main/samples'>
                <Button variant='contained' className={ classes.btnDivChild2 }>
                  <FaGithub size='24' color='#fff'/>
                  <p className={ classes.gitp2 }>
                    GitHub
                  </p>
                </Button>
              </StyleLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section;
