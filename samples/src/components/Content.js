/* eslint-disable */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Formcmpo from 'components/FormComponent';
import Button from '@material-ui/core/Button';
import DialogSheet from 'components/DialogSheet';
import Select from 'react-select';

// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = ({ title, subTitle, func, sheet, dialog }) => {
  const [value, setValue] = useState('1');
  const textElem = useRef();
  const useMemoTitle = useMemo(() => title, [title]);
  const useMemosubTitle = useMemo(() => subTitle, [subTitle]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const copyHandler = () => {
    textElem.current.select();
    document.execCommand('copy');
  };

  const form = title && title.indexOf('Form') > -1 ? true : false;

  const useStyles = makeStyles((props) => ({
    content: {
      fontFamily: 'Noto Sans CJK KR,sans-serif;',
      margin: '0px auto',
      maxWidth: '1200px',
      paddingLeft: '0px',
      paddingRight: '0px'
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
    subDiv: {
      paddingBottom: '15px'
    },
    divRow: {
      display: 'flex'
    },
    btnDivChild1: {
      marginRight: '12px',
      width: '140px',
      height: '42px',
      backgroundColor: '#4c4c57',
      color: '#fff'
    },
    divMerge: {
      display: 'flex'
    },
    mergeSelect: {
      flex: 1
    }
  }));

  const listItems = sheet && sheet.map((grid) => {
    return grid.id + '= ' + JSON.stringify(grid.options, null, '\t')
  });

  const classes = useStyles();

  // const mergeResult = func.map((obj, index) => {
  //   const option = useMemo(() =>
  //     [
  //       { value: '0', label: obj.name + ': 0' },
  //       { value: '1', label: obj.name + ': 1' },
  //       { value: '2', label: obj.name + ': 2' },
  //       { value: '3', label: obj.name + ': 3' },
  //       { value: '4', label: obj.name + ': 4' },
  //       { value: '5', label: obj.name + ': 5' },
  //       { value: '6', label: obj.name + ': 6' }
  //     ], []
  //   );
  //   return (
  //     <>
  //       <Select key={ obj.id } options={ option } defaultValue={ option[0] } className={ classes.mergeSelect }/>
  //     </>
  //   )
  // });

  return (
    <>
      <Container maxWidth='lg' component='main' className={ classes.content }>
        { sheet &&
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={ value }>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={ handleChange } aria-label='Tabs'>
                  <Tab label='GRID' value='1' />
                  <Tab label='SOURCE' value='2' />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <div>
                  <p className={ classes.title }>
                    { useMemoTitle }
                  </p>
                  <div className={ classes.subDiv }>
                    <span className={ classes.subTitle }>
                      { useMemosubTitle }
                    </span>
                    {
                      (dialog && <DialogSheet dialog={ dialog } />)
                    }
                  </div>
                </div>
                <div className={ classes.divRow }>
                  {
                    value === '1' &&
                    sheet.map((grid, index) => {
                      return (
                        <IBSheet8 key={ grid.id } id={ grid.id } el={ grid.el } width={ grid.width } height={ grid.height } options={ grid.options } />
                      );
                    })
                  }
                  { form &&
                    <Formcmpo />
                  }
                </div>
              </TabPanel>
              <TabPanel value='2'>
                <div>
                  <span className={ classes.title }>
                    { useMemoTitle }
                  </span>
                  <p className={ classes.subTitle }>
                    { useMemosubTitle }
                  </p>
                </div>
                {
                  value === '2' &&
                  <div>
                    <Button variant='contained' className={ classes.btnDivChild1 } onClick={ copyHandler }>
                      Copy
                    </Button>
                    <textarea ref={ textElem } readOnly style={ {width: '100%' , height: '750px'} } value={ listItems } />
                  </div>
                }
              </TabPanel>
            </TabContext>
          </Box>
        }
      </Container>
    </>
  )
}

export default Content;