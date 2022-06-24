import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { route } from 'components/Navigation/Navigation';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import { StyledDivider } from 'components/View/Features/GlobalStyles';
import Button from '@mui/material/Button';
import styles from 'assets/styles/components/View/pageNavigation.module.css';

const PageNavigation = () => {
  const menuIndex = useSelector(state => state.menuIndex);

  return (
    <>
      {
        menuIndex != null &&
          <div>
            <div className={ styles.wrapper }>
              {
                route[menuIndex - 1] ?
                    <Button startIcon={<ChevronLeftTwoToneIcon/>}>{route[menuIndex - 1].title}</Button>
                  <Link to={`/${route[menuIndex - 1].name}`} className={ styles.link }>
                  </Link>
                  : <div></div>
              }
              {
                route[menuIndex + 1] && 
                    <Button endIcon={<ChevronRightTwoToneIcon/>}>{route[menuIndex + 1].title}</Button>
                  <Link to={`/${route[menuIndex + 1].name}`} className={ styles.link }>
                  </Link>
              }
            </div>
            <StyledDivider />
          </div>
      }
    </>
  );
};

export default PageNavigation;