import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { route } from 'components/Navigation/Navigation';
import { StyledDivider } from 'components/View/Features/GlobalStyles';
import Button from '@mui/material/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
                  <Link to={`/${route[menuIndex - 1].name}`} className={ styles.link }>
                    <Button startIcon={<FiChevronLeft/>}>{route[menuIndex - 1].title}</Button>
                  </Link>
                  : <div></div>
              }
              {
                route[menuIndex + 1] && 
                  <Link to={`/${route[menuIndex + 1].name}`} className={ styles.link }>
                    <Button endIcon={<FiChevronRight/>}>{route[menuIndex + 1].title}</Button>
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