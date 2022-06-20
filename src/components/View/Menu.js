import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTable } from '@fortawesome/free-solid-svg-icons';
import { menuClasses } from './Features/ViewStyle';

const menu = [{name: 'type', title: '컬럼 별 타입'}, {name: 'merge', title: '자동 머지 기능'}, {name: 'subsum', title: '소계 기능'}, {name: 'tree', title: '트리 예제'}, {name: 'dataload', title: '대용량 조회'}, {name: 'formula', title: '포뮬러 기능'}, {name: 'multirecord', title: '멀티레코드'}, {name: 'serverscrollpaging', title: '서버 스크롤 페이징'}, {name: 'form', title: 'Form 형태를 이용한 상세보기'}, {name: 'multiple', title: '여러 개의 시트'}, {name: 'dialog', title: '시트 + 다이얼로그'}, {name: 'masterDetail', title: '마스터/디테일'}];

const Menu = () => {
  const classes = menuClasses();

  const [open, setOpen] = useState(false);
  const ibsheet = useSelector(state => state.sheet);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <FontAwesomeIcon icon={faTable} className={classes.titleIcon} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className={classes.titleWrapper}>
            <Typography variant="h6" className={classes.listTitle}>{`IBSHEET`}</Typography>
            <Typography variant="caption">{ibsheet && ibsheet[0] && ibsheet[0].version().split('-')[0]}</Typography>
          </div>
        </ListItem>
        <Divider />
        {
          menu && menu.map((val, index) => {
            return (
              <Link key={index} to={`/${val.name}`} className={classes.menuLink}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary={val.title}/>
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    </Box>
  );

  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        className={classes.mainIcon}
        onClick={toggleDrawer(true)}
      />
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  )
}

export default Menu;