// redux 적용
export const CREATE_SHEET = 'CREATE_SHEET';
export const CREATE_SAMPLE = 'CREATE_SAMPLE';
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE';

const initalState = {
  title: '',
  subTitle: '',
  name: '',
  sheet: [],
  options: [],
  data: []
};

const createSample = (name, title, subTitle, options, data) => {
  return {
    type: 'CREATE_SAMPLE',
    name,
    title,
    subTitle,
    options,
    data
  }
};

const removeSample = () => {
  return {
    type: 'REMOVE_SAMPLE'
  }
};

const createSheet = (sheet) => {
  return {
    type: 'CREATE_SHEET',
    sheet
  }
}

const reducer = (state = initalState, action) => {
  console.log('reducer', state, action, action.type);
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
        data: action.data
      };
    case REMOVE_SAMPLE:
      return {
        ...state,
        name: null,
        title: null,
        subTitle: null,
        data: [],
        options: [],
        sheet: []
      };
    default:
      return state;
  }
}

export default reducer;
export { createSample, removeSample, createSheet };