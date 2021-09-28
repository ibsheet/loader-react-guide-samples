// redux 적용
export const CREATE_SHEET = 'CREATE_SHEET';
export const CREATE_SAMPLE = 'CREATE_SAMPLE';
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE';
export const Create_FormState = 'CREATE_FORMSTATE';

const initalState = {
  title: '',
  subTitle: '',
  name: '',
  sheet: [],
  options: [],
  fname: '',
  fage: '',
  fposition: '',
  fsalary: '',
  fdepartment: ''
};

const createFormState = (fname, fage, fposition, fsalary, fdepartment) => {
  return {
    type: Create_FormState,
    fname,
    fage,
    fposition,
    fsalary,
    fdepartment
  }
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
    case Create_FormState:
      return {
        ...state,
        fname: action.fname,
        fage: action.fage,
        fposition: action.fposition,
        fsalary: action.fsalary,
        fdepartment: action.fdepartment
      };
    default:
      return state;
  }
}

export default reducer;
export { createSample, removeSample, createSheet, createFormState };