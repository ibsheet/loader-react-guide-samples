import React from 'react';
import Container from '@material-ui/core/Container';
import Section from 'components/Section';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';

const Content = ({ title, subTitle, func, options }) => {
  console.log(func);
  const useStyles = makeStyles((props) => ({
    content: {
      fontFamily: 'Arial'
    },
    title: {

    },
    subTitle: {
      color: '#4c4c57'
    }
  }));

  const classes = useStyles();

  // 우선 추가되어야할 컴포넌트로는 button, select
  // 이 구간에서 이벤트에 사용할 함수를 받아와 실행 할 수 있는지??..
  // const funcResult = [];
  // if (func) {
  //   if (func.button) {
  //     funcResult.push((func.button.map((obj, index) => <Button key={ index } id={ obj.id }>{ obj.val }</Button>)));
  //   }
  // }

  return (
    <>
      <Section title={ title } subTitle={ subTitle } func={ func }></Section>
      <Container maxWidth="lg" component="main" className={ classes.content }>
        { options && <IBSheet8 id="sheet" el="sheetDiv" width="100%" height="100%" options={ options } />}
      </Container>
    </>
  )
}

export default Content;