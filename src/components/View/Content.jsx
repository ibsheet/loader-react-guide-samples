/* eslint-disable */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import IBSheet8 from '../Create/SheetCreate';
import DialogSheet from '../../samples/Dialog/component';
import MergeFunction from '../../samples/Merge/function';
import LoadFunction from '../../samples/DataLoad/function';
import SubSumFunction from '../../samples/SubSum/function';
import MultiFunction from '../../samples/Multi/function';
import TreeFunction from '../../samples/Tree/function';
import FormDiv from '../../samples/Form/component';
import styles from '../../assets/styles/components/View/content.module.css';

// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = () => {
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);
  const name = useSelector((state) => state.name);
  const sheet = useSelector((state) => state.sheet);
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
  }, []);

  return (
    <>
      <Container maxWidth='lg' component='main' className={ styles.container }>
        <div className={ styles.main }>
        <button className={ styles.topButtons } onClick={ handleTop }>TOP</button>
          <div className={ styles.sub }>
            <span className={ styles.title }>
              { title }
            </span>
            <p className={ styles.subTitle }>
              { subTitle }
            </p>
              {
                (name === 'Merge' && <MergeFunction />) ||
                (name === 'Tree' && <TreeFunction />) ||
                (name === 'DataLoad' && <LoadFunction />) ||
                (name === 'SubSum' && <SubSumFunction />) ||
                (name === 'Multi' && <MultiFunction />) ||
                (name === 'Dialog' && <DialogSheet />)
              }
          </div>
          <div className={ styles.sheetWrapper }>
            {
              (sheet && <IBSheet8 />)
            }
            {
              (name === 'Form' && <FormDiv />)
            }
          </div>
        </div>
      </Container>
    </>
  )
}

export default Content;