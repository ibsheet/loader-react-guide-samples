import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

// 각 샘플 컴포넌트에서 title, subTitle, func 받아오는 것은 sheet 컴포넌트 쪽 탭을 만들어서 사용함.
const Content = ({ title, subTitle, func, sheet }) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
    }
  }));

  const classes = useStyles();

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
                  <span className={ classes.title }>
                    { title }
                  </span>
                  <p className={ classes.subTitle }>
                    { subTitle }
                  </p>  
                </div>
                <IBSheet8 id= { sheet.id } el={ sheet.el } width={ sheet.width } height={ sheet.height } options={ sheet.options } />
              </TabPanel>
              <TabPanel value='2'>Item Two</TabPanel>
            </TabContext>
          </Box>
        }
      </Container>
    </>
  )
}

export default Content;