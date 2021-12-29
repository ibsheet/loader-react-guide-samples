/* eslint-disable */
import React from 'react';
import Container from '@material-ui/core/Container';
import IBSheet8 from 'components/Create/SheetCreate';
import DialogSheet from 'samples/Dialog/component';
import MergeFunction from 'samples/Merge/function';
import LoadFunction from 'samples/DataLoad/function';
import SubSumFunction from 'samples/SubSum/function';
import MultiFunction from 'samples/Multi/function';
import TreeFunction from 'samples/Tree/function';
import FormDiv from 'samples/Form/component';
import { useSelector } from 'react-redux';
import { contentClasses } from './Features/ViewStyle';

// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = () => {
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);
  const name = useSelector((state) => state.name);
  const sheet = useSelector((state) => state.sheet);
  const classes = contentClasses();

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