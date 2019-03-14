import { FUNC_TYPE } from './const';

export const addFunc = () => ({
  type: FUNC_TYPE.ADD_FUNC
});

export const selectFunc = item => ({
  type: FUNC_TYPE.SELECT_FUNC,
  item
});
