/* eslint-disable */
import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';
import DialogSheet from 'components/DialogSheet';
import MergeFunction from '../samples/Merge/function';
import LoadFunction from '../samples/DataLoad/function';
import SubSumFunction from '../samples/SubSum/function';
import { useSelector } from 'react-redux';


// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = () => {
  const title = useSelector((state) => state.title);
  const subTitle = useSelector((state) => state.subTitle);
  const name = useSelector((state) => state.name);
  const sheet = useSelector((state) => state.sheet);
  const [value, setValue] = useState('1');
  const textElem = useRef();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const copyHandler = () => {
    textElem.current.select();
    document.execCommand('copy');
  };

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

  const listItems = sheet && sheet.length > 0 && sheet.map((grid) => {
    return grid.id + '= ' + JSON.stringify(grid.options, null, '\t')
  });

  const classes = useStyles();

  return (
    <>
      <Container maxWidth='lg' component='main' className={ classes.content }>
      {
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
                  <span className={ classes.title }>
                    { title }
                  </span>
                  <p className={ classes.subTitle }>
                    { subTitle }
                  </p>
                    {
                      (name === 'Merge' && <MergeFunction />) ||
                      (name === 'DataLoad' && <LoadFunction />) ||
                      (name === 'SubSum' && <SubSumFunction />) ||
                      (name === 'Dialog' && <DialogSheet dialog={ dialog } />)
                    }
                </div>
                <div className={ classes.divRow }>
                  {
                    sheet &&
                    <IBSheet8 />
                  }
                </div>
              </TabPanel>
              <TabPanel value='2'>
                <div>
                  <span className={ classes.title }>
                    { title }
                  </span>
                  <p className={ classes.subTitle }>
                    { subTitle }
                  </p>
                </div>
                { sheet.length > 0 && value === '2' &&
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