import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaSearch } from 'react-icons/fa';
import { route } from '../components/Navigation/Navigation'
import styles from '../assets/styles/samples/home.module.css';
import styled from '@emotion/styled';
import type from '../assets/image/type.png';
import merge from '../assets/image/merge.png';
import subsum from '../assets/image/subsum.png';
import tree from '../assets/image/tree.png';
import dataload from '../assets/image/dataload.png';
import formula from '../assets/image/formula.png';
import multirecord from '../assets/image/multirecord.png';
import serverscrollpaging from '../assets/image/serverscrollpaging.png';
import form from '../assets/image/form.png';
import multiple from '../assets/image/multiple.png';
import dialog from '../assets/image/dialog.png';
import masterDetail from '../assets/image/masterDetail.png';

const StyledFunctionText = styled.span`
  font-size: 1.0rem;
  margin-right: 0.25rem;
  padding: 5px 8px;
  background: #d04630;
  color: #fff;
  border-radius: .25rem;
  font-weight: bold;
  background: ${(props) => props.category === "고급기능" ? '#009ecc' : (props.category === "실무예제" ? '#4caf50' : '#d04630')};
`;

// 여기에 Rounter 설정
const Main = () => {
  const images = [type, merge, subsum, tree, dataload, formula, multirecord, serverscrollpaging, form, multiple, dialog, masterDetail];

  return (
    <>
      <Container className={ styles.container }>
        {/* 샘플 리스트 영역 */}
        <Grid container spacing={4}>
          {route && route.map((card, index) => (
            <Grid item key={ index } xs={ 12 } sm={ 6 } md={ 4 }>
              <Card className={ styles.card }>
                <CardContent className={ styles.cardContent }>
                  <div className={ styles.imgs } style={ { backgroundImage: `url(${images[index]})` } } >
                    <div className={ styles.cardHover } >
                      <Link underline='none' to={'/' + card.name}>
                        <div className={ styles.iconWrap }>
                          <FaSearch className={ styles.icon }  size='60' />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <StyledFunctionText category={card.category} variant='body1' component='span'>
                      { card.category }
                    </StyledFunctionText>
                    <span className={ styles.cardTitle }>
                      { card.title }
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
