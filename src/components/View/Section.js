import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { FaGithub } from 'react-icons/fa';
import { GrCodeSandbox } from 'react-icons/gr';
import styles from 'assets/styles/components/View/section.module.css';

const Section = () => {
  const title = 'IBSheet8';
  const subTitle = 'Loader를 사용하여 IBSheet8의 대용량 조회, 높은 자유도, 다양한 렌더링 방식 등 다양한 기능을 React 환경에서 제공합니다.';
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    const topButton = document.getElementsByClassName(styles.topButtons)[0];
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
        behavior: 'smooth'
      });
      setScrollY(0);
    }
  };

  useEffect(() => {
    if (scrollY < 100) {
      const topButton = document.getElementsByClassName(styles.topButtons)[0];
      if (topButton && topButton.style.opacity === '1') {
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
            <FontAwesomeIcon icon={ faTable } className={ classes.icon } size={ '3x' } />
    <div className={ styles.content }>
      <button className={ styles.topButtons } onClick={ handleTop }>TOP</button>
      <Container>
        <div className={ styles.header }>
          <span className={ styles.title }>
            { title }
          </span>
          <p className={ styles.subTitle }>
            { subTitle }
          </p>
          <Stack spacing={2} direction='row' className={ styles.buttonWrapper }>
            <Button variant='contained' startIcon={<GrCodeSandbox size='24' color='#fff'/>} className={ styles.buttonSandbox } href='https://codesandbox.io/s/github/ibsheet/loader-react-guide-samples/tree/main?file=/src/index.js' target='_blank' >
              <p className={ styles.textSanbox }>
                SandBox
              </p>
            </Button>
            <Link underline='none' color='inherit' href='https://github.com/ibsheet/loader-react-guide-samples/tree/main/samples'>
              <Button variant='contained' startIcon={<FaGithub size='24' color='#fff'/>} className={ styles.buttonGithub }>
                <p className={ styles.textGithub }>
                  GitHub
                </p>
              </Button>
            </Link>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Section;
