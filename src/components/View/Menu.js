import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { route } from '../Navigation/Navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography';
import { FaTable, FaBars } from 'react-icons/fa';
import styles from '../../assets/styles/components/View/menu.module.css';

const Menu = () => {
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
          <FaTable size='30' className={styles.titleIcon} />
          <Divider orientation='vertical' variant='middle' flexItem />
          <div className={styles.titleWrapper}>
            <Typography variant='h6' className={styles.listTitle}>{`IBSHEET`}</Typography>
            <Typography variant='caption'>{ibsheet && ibsheet[0] && ibsheet[0].version().split('-')[0]}</Typography>
          </div>
        </ListItem>
        <Divider />
        {
          route && route.map((val, index) => {
            return (
              <Link key={index} to={`/${val.name}`} className={styles.menuLink}>
                <ListItem className={styles.listItem}>
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
      <FaBars
        className={styles.mainIcon}
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