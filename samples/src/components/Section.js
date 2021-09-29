import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { CgComponents } from 'react-icons/cg';
import StyleLink from '@material-ui/core/Link';
import Modal from 'react-bootstrap/Modal';
import CopyToClipboard from 'components/SheetCreateCopy'

const Section = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const title = 'IBSheet8';
  const subTitle =
    'Loader를 사용하여 IBSheet8의 대용량 조회, 높은 자유도, 다양한 렌더링 방식 등 다양한 기능을 React 환경에서 제공합니다.';

  const useStyles = makeStyles((theme) => ({
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
      backgroundColor: '#a777e3',
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
      color: '#fff',
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

  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <Container>
          <div className={ classes.header }>
            <FontAwesomeIcon icon={ faTable } className={ classes.icon } size={ '3x' } />
            <span className={ classes.title }>
              { title }
            </span>
            <p className={ classes.subTitle }>
              { subTitle }
            </p>
            <div className={ classes.btnDiv }>
              <Button variant='contained' className={ classes.btnDivChild1 } onClick={ handleOpen }>
                <CgComponents size='24' color='#fff' />
                <p className={ classes.gitp1 }>
                  Create
                </p>
              </Button>
              <Modal show={ open } className= { classes.bcontent } centered>
                <Modal.Header closeButton onHide={ handleClose } className={ classes.modalTitle }>
                  <Modal.Title>시트 생성 모듈
                    <span className={ classes.intitle }>(components/SheetCreate.js)</span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CopyToClipboard />
                </Modal.Body>
              </Modal>
              <StyleLink underline='none' color='inherit' href='https://github.com/ibsheet/loader-react-guide-samples/tree/main/samples'>
                <Button variant='contained' className={ classes.btnDivChild2 }>
                  <FaGithub size='24' color='#fff'/>
                  <p className={ classes.gitp2 }>
                    GitHub
                  </p>
                </Button>
              </StyleLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section;
