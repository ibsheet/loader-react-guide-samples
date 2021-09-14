import React, { useState, useEffect } from 'react';
import IBSheet8 from 'components/SheetCreate';
const Content = ({ options }) => {

  return (
    <>
        <IBSheet8 id="sheet" el="sheetDiv" width="100%" height="500px" options={ options } />
    </>
  )
}
export default Content;