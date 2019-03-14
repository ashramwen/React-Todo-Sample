import { FUNC_TYPE } from '../actions/const';

const initialState = {
  current: { id: -1, text: '' },
  edit_mode: false
};

const func = (state = initialState, action) => {
  switch (action.type) {
    case FUNC_TYPE.SELECT_FUNC:
      return { ...state, current: action.item, edit_mode: true };
    default:
      return initialState;
  }
};

export default func;
