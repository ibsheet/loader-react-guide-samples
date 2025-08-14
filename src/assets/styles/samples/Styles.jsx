import styled from '@emotion/styled';
import { Card, CardContent } from '@mui/material';

export const ContainerWrap = styled('div')`
  padding-top: 4rem;
  padding-bottom: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CustomCard = styled(Card)`
  height: 100%;
`;

export const CustomCardContent = styled(CardContent)`
  padding: 10px;
  padding-bottom: 13px !important;
`;

export const ImgBox = styled('div')`
  background-size: cover;
  background-repeat: no-repeat;
  color: #FFF;
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

export const HoverOverlay = styled('div')`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
  opacity: 0;
  background-color: rgba(0,0,0,0.5);
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  transition: opacity 350ms ease;

  &:hover {
    opacity: 1;
  }
`;

export const IconWrapper = styled('div')`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const IconStyle = styled('div')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #FFFFFF;
  opacity: 0.8;
`;

export const CardTitle = styled('span')`
  padding: 0px 5px;
  font-weight: bold;
`;