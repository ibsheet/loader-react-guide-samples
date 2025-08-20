/* eslint-disable */
import { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
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

const Content = () => {
  const title = useSelector(state => state.title);
  const subTitle = useSelector(state => state.subTitle);
  const name = useSelector(state => state.name);
  const sheet = useSelector(state => state.sheet, shallowEqual);

  // TOP 버튼 노출 여부 (임계값 넘을 때만 렌더 트리거)
  const [showTop, setShowTop] = useState(false);
  const showTopRef = useRef(false);
  const tickingRef = useRef(false);

  const updateTopVisibility = useCallback(() => {
    tickingRef.current = false;
    const shouldShow = window.scrollY > 100;
    if (shouldShow !== showTopRef.current) {
      showTopRef.current = shouldShow;
      setShowTop(shouldShow);
    }
  }, []);

  const scrollHandler = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(updateTopVisibility);
    }
  }, [updateTopVisibility]);

  const handleTop = () => {
    if (showTopRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, { passive: true });
    updateTopVisibility(); // 초기 상태 동기화
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler, updateTopVisibility]);

  return (
    <Container maxWidth='lg' component='main' className={ styles.container }>
      <div className={ styles.main }>
        <button
          className={ styles.topButtons }
          onClick={ handleTop }
          style={{
            opacity: showTop ? 1 : 0,
            cursor: showTop ? 'pointer' : 'default',
            transition: 'opacity .25s'
          }}
        >
          TOP
        </button>
        <div className={ styles.sub }>
          <span className={ styles.title }>{ title }</span>
          <p className={ styles.subTitle }>{ subTitle }</p>
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
          { sheet && <IBSheet8 /> }
          { name === 'Form' && <FormDiv /> }
        </div>
      </div>
    </Container>
  );
};

export default Content;