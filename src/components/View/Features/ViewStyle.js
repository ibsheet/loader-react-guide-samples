import { makeStyles } from '@material-ui/core/styles';

// View 폴더에서 사용하는 style 들을 정리.
const contentClasses = makeStyles(() => ({
  content: {
    fontFamily: 'Noto Sans CJK KR,sans-serif;',
    margin: '0px auto',
    maxWidth: '1200px',
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  mainDiv: {
    paddingTop: '15px',
    width: '100%',
    paddingLeft: '24px',
    paddingLight: '24px'
  },
  subDiv: {
    width: '100%'
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
  divRow: {
    display: 'flex'
  }
}));

const layoutClasses = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(0.8)
  },
  homeLink: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      color: 'inherit'
    }
  },
  footIcon: {
    marginRight: theme.spacing(1.0),
    color: 'cornflowerblue'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  bar: {
    backgroundColor: 'cornflowerblue'
  },
  infooter: {
    maxWidth: '1140px',
    margin: '0px auto'
  },
  footdesc: {
    fontSize: '18px'
  },
  footTitle: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#000'
  },
  spContent1: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    lineHeight: '1.6'
  },
  spContent2: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '1.6'
  },
  footfloor: {
    paddingTop: '48px'
  }
}));

const sectionClasses = makeStyles(theme => ({
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#000'
  },
  subTitle: {
    fontSize: '18px'
  },
  content: {
    backgroundColor: 'rgb(247, 247, 247)',
    borderBottom: '1px solid rgb(229, 229, 229)',
    padding: theme.spacing(6, 0, 3),
    fontFamily: 'Noto Sans CJK KR,sans-serif',
  },
  button: {
    marginTop: theme.spacing(4),
  },
  header: {
    maxWidth: '1140px',
    margin: '0px auto'
  },
  icon: {
    marginRight: theme.spacing(1.0),
    color: 'cornflowerblue'
  },
  btnDiv: {
    paddingTop: '20px'
  },
  btnDivChild1: {
    marginRight: '12px',
    width: '140px',
    height: '42px',
    backgroundColor: '#fff',
    color: '#fff'
  },
  btnDivChild2: {
    marginRight: '12px',
    width: '140px',
    height: '42px',
    backgroundColor: '#000'
  },
  gitp1: {
    paddingLeft: '10px',
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Noto Sans CJK KR,sans-serif',
  },
  gitp2: {
    paddingLeft: '10px',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Noto Sans CJK KR,sans-serif',
  },
  bcontent: {
    position: 'fiexd',
    top: '50%',
    left: '50%',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
  },
  modalTitle: {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderBottom: '1px solid black'
  },
  intitle: {
    fontSize: '1.0rem'
  }
}));

const topButtonClasses = makeStyles(theme => ({
  topButtons: {
    position: 'fixed',
    opacity: '0',
    bottom: '40px',
    right: '40px',
    zIndex: '255',
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: 'none',
    background: 'cornflowerblue',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '-0.06em',
    boxShadow: '1px 1px 6px 3px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease-in'
  }
}));

export { contentClasses, layoutClasses, sectionClasses, topButtonClasses };