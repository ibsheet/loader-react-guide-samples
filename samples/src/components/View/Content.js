/* eslint-disable */
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/Create/SheetCreate';
import DialogSheet from 'samples/Dialog/component';
import MergeFunction from 'samples/Merge/function';
import LoadFunction from 'samples/DataLoad/function';
import SubSumFunction from 'samples/SubSum/function';
import MultiFunction from 'samples/Multi/function';
import TreeFunction from 'samples/Tree/function';
import FormDiv from 'samples/Form/component';
import { useSelector } from 'react-redux';

// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = () => {
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);
  const name = useSelector((state) => state.name);
  const sheet = useSelector((state) => state.sheet);

  const useStyles = makeStyles((props) => ({
    content: {
      fontFamily: 'Noto Sans CJK KR,sans-serif;',
      margin: '0px auto',
      maxWidth: '1200px',
      paddingLeft: '0px',
      paddingRight: '0px'
    },
    mainDiv: {
      paddingTop: '15px',
      width: '100%',
      paddingLeft: '24px',
      paddingLight: '24px'
    },
    subDiv: {
      width: '100%'
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#000'
    },
    subTitle: {
      color: '#4c4c57',
      fontSize: '1rem'
    },
    divRow: {
      display: 'flex'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Container maxWidth='lg' component='main' className={ classes.content }>
        <div className={ classes.mainDiv }>
          <div className={ classes.subDiv }>
            <span className={ classes.title }>
              { title }
            </span>
            <p className={ classes.subTitle }>
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
          <div className={ classes.divRow }>
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