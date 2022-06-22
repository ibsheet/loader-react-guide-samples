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
import { menuClasses } from 'components/View/Features/ViewStyle';
import { route } from 'components/Navigation/Navigation';

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
          route && route.map((val, index) => {
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