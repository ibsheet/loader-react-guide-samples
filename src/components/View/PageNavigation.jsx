import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { route } from '../Navigation/Routes';
import { StyledDivider } from './Features/GlobalStyles';
import Button from '@mui/material/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from '../../assets/styles/components/View/pageNavigation.module.css';

const PageNavigation = () => {
  const menuIndex = useSelector(state => state.menuIndex);

  return (
    <>
      {
        menuIndex != null && route &&
          <div>
            <div className={ styles.wrapper }>
              {
                <Link to={`/${menuIndex === 0 ? route[route.length - 1].name : route[menuIndex - 1].name}`} className={styles.link}>
                  <Button startIcon={<FiChevronLeft />}>{menuIndex === 0 ? route[route.length - 1].title : route[menuIndex - 1].title}</Button>
                </Link>
              }
              {
                <Link to={`/${menuIndex === route.length - 1 && route ? route[0].name : route[menuIndex + 1].name}`} className={styles.link}>
                <Button endIcon={<FiChevronRight />}>{menuIndex === route.length - 1 ? route[0].title : route[menuIndex + 1].title}</Button>
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