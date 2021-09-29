const dialogOptions = {
  id: 'sheetDialog',
  el: 'sheetDialogDiv',
  options: {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
    },
    LeftCols: [
      {
        Header: 'No',
        Type: 'Int',
        Name: 'SEQ',
        Width: 80
      }
    ],
    Cols: [
      {
        Header: '이름',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sName'
      },
      {
        Header: '나이',
        Type: 'Int',
        MinWidth: 80,
        Name: 'sAge'
      },
      {
        Header: '직책',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sPosi'
      },
      {
        Header: '월급',
        Type: 'Int',
        MinWidth: 100,
        Name: 'sPrice'
      },
      {
        Header: '부서',
        Type: 'Text',
        RelWidth: 1,
        Name: 'sDepart'
      }
    ]
  }
}; 

export default dialogOptions;