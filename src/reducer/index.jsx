// init
export const CREATE_SHEET = 'CREATE_SHEET';
export const CREATE_SAMPLE = 'CREATE_SAMPLE';
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE';
export const ADD_SHEET_ID = 'ADD_SHEET_ID';
export const SET_VISIBLE = 'SET_VISIBLE';

const initalState = {
  sheetIds: [], // id만 저장!
  title: '',
  subTitle: '',
  name: '',
  sheet: [],
  options: [],
  menuIndex: null,
  visible: true
};

const addSheetId = (id) => ({
  type: ADD_SHEET_ID,
  payload: id,
});

const setVisible = (visible) => ({
  type: SET_VISIBLE,
  payload: visible
});

// sample, sheet action
const createSample = (name, title, subTitle, options, menuIndex) => {
  return {
    type: CREATE_SAMPLE,
    name,
    title,
    subTitle,
    options,
    menuIndex
  }
};

const removeSample = () => {
  return {
    type: REMOVE_SAMPLE
  }
};

const createSheet = sheet => {
  return {
    type: CREATE_SHEET,
    sheet
  }
};

// reducer
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_SHEET:
      return {
        ...state,
        sheet: [...state.sheet, action.sheet]
      };
    case CREATE_SAMPLE:
      return {
        ...state,
        name: action.name,
        title: action.title,
        subTitle: action.subTitle,
        options: [...state.options, action.options],
        menuIndex: action.menuIndex
      };
    case REMOVE_SAMPLE:
      return {
        ...state,
        name: null,
        title: null,
        subTitle: null,
        options: [],
        sheet: [],
        menuIndex: null
      };
    case ADD_SHEET_ID:
      if (state.sheetIds.includes(action.payload)) return state;
      return {
        ...state,
        sheetIds: [...state.sheetIds, action.payload]
      };
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
export { createSample, removeSample, createSheet, addSheetId, setVisible };