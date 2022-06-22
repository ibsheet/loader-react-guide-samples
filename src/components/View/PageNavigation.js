import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { route } from 'components/Navigation/Navigation';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import { pageNavigationClasses } from 'components/View/Features/ViewStyle';

const PageNavigation = () => {
  const classes = pageNavigationClasses();
  const menuIndex = useSelector(state => state.menuIndex);

  return (
    <>
      {
        menuIndex &&
          <div>
            <div className={ classes.wrapper }>
              <Link underline='none' to={`/${route[menuIndex - 1].name}`} className={ classes.link }>
                <Button startIcon={<ChevronLeftTwoToneIcon/>}>{route[menuIndex - 1].title}</Button>
              </Link>
              <Link underline='none' to={`/${route[menuIndex + 1].name}`} className={ classes.link }>
                <Button endIcon={<ChevronRightTwoToneIcon/>}>{route[menuIndex + 1].title}</Button>
              </Link>
            </div>
            <Divider />
          </div>
      }
    </>
  );
};

export default PageNavigation;