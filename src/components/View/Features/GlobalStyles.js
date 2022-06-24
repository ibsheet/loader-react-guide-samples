import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const StyledSampleWrapper = styled.div`
  padding-bottom: 10px;
`;

export const StyledSampleButton = styled(Button)`
  height: 30px;
  background: #4c4c57;
  color: #fff;
  margin-right: 10px;

  &:hover {
    background-color: rgba(76, 76, 87, 0.9);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
`;

export const StyledDivider = styled(Divider)`
  opacity: 0.1;
`;
