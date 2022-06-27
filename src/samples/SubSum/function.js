import React from 'react';
import { useSelector } from 'react-redux';
import { StyledSampleWrapper, StyledSampleButton } from '../../components/View/Features/GlobalStyles.js';

const Function = () => {
  const ibsheet = useSelector(state => state.sheet);
  const sheet = ibsheet[ibsheet.length - 1];
  const color = {
    subsum: '#f08080',
    cumul: '#78c7fa',
    multisubsum: '#fad1d1',
    multicumul: '#ceebfd'
  };
  const btnObj = [
    {
      value: 'subsum',
      name: '단일 컬럼 소계'
    },
    {
      value: 'cumulate',
      name: '단일 컬럼 소계/누계'
    },
    {
      value: 'multisubsum',
      name: '다중 컬럼 소계'
    },
    {
      value: 'multicumulate',
      name: '다중 컬럼 소계/누계'
    },
    {
      value: 'remove',
      name: '소계행 삭제'
    }
  ];

  const makeSubTotal = (state) => {
    switch(state) {
      case 'subsum':
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'A|B|C|D',
            position: 'bottom',
            color: color.subsum,
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col',
                span: 3
              },
              {
                col: 'E',
                val: ' ',
                cumVal: ' ',
                span: 2
              }
            ],
          }
        ]);
        break;
      case 'cumulate':
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'A|B|C|D',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col',
                span: 3
              }
            ],
            showCumulate: 1,
            color: color.subsum,
            cumulateColor: color.cumul ,
            position: 'bottom'
          }
        ]);
        break;
      case 'multisubsum':
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'B|C',
            position: 'bottom',
            color: color.subsum
          },
          {
            stdCol: 'sUnit',
            avgCols: 'B|C',
            captionCol: [
              {
                col: 'sUnit',
                val: '%s: %col'
              }
            ],
            position: 'bottom',
            color: color.multisubsum
          },
        ]);
        break;
      case 'multicumulate':
        sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'B|C',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            showCumulate: 1,
            position: 'bottom',
            color: color.subsum,
            cumulateColor: color.cumul,
          },
          {
            stdCol: 'sUnit',
            avgCols: 'B|C',
            captionCol: [
              {
                col: 'sUnit',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            showCumulate: 1,
            position: 'bottom',
            color: color.multisubsum,
            cumulateColor: color.multicumul
          },
          {
            stdCol: 'sDetail',
            avgCols: 'A|D',
            captionCol: [
              {
                col: 'sDetail',
                val: '%s: %col',
                cumVal: '%s: %col'
              }
            ],
            countCols: 'E',
            showCumulate: 1,
            position: 'bottom',
            color: color.multisubsum,
            cumulateColor: color.multicumul
          }
        ]);
        break;
      default:
        sheet.removeSubTotal();
    }
  }

  const clickHandler = (e) => {
    makeSubTotal(e.currentTarget.value);
  }

  return (
    <StyledSampleWrapper>
      {
        btnObj.map((obj, index) => (
          <StyledSampleButton value={ obj.value } variant='contained' onClick={ clickHandler } key={ index }>
            { obj.name }
          </StyledSampleButton>
        ))
      }
    </StyledSampleWrapper>
  );
};

export default Function;