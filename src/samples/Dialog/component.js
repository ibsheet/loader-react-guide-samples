import React from 'react';
import MaterailModal from '../Dialog/Material/materialModal';
import BootStrapModal from '../Dialog/BootStrap/bootStrapModal';
import SweetAlert2Modal from '../Dialog/SweetAlert2/sweetAlert2Modal';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const StyledStack = styled(Stack)`
  padding-bottom: 10px;
`;

const DialogSheet = () => {
  return (
    <StyledStack direction='row' spacing={2}>
      <MaterailModal />
      <BootStrapModal />
      <SweetAlert2Modal />
    </StyledStack>
  );
}

export default DialogSheet;
