// redux 적용
export const CREATE_SHEET = 'CREATE_SHEET';
export const CREATE_SAMPLE = 'CREATE_SAMPLE';
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE';

const initalState = {
  title: '',
  subTitle: '',
  name: '',
  sheet: [],
  options: []
};

const createSample = (name, title, subTitle, options) => {
  return {
    type: CREATE_SAMPLE,
    name,
    title,
    subTitle,
    options
  }
};

const removeSample = () => {
  return {
    type: REMOVE_SAMPLE
  }
};

const createSheet = (sheet) => {
  return {
    type: CREATE_SHEET,
    sheet
  }
}

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
        options: [...state.options, action.options]
      };
    case REMOVE_SAMPLE:
      return {
        ...state,
        name: null,
        title: null,
        subTitle: null,
        options: [],
        sheet: []
      };
    default:
      return state;
  }
}

export default reducer;
export { createSample, removeSample, createSheet };