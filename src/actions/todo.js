import { TODO_TYPE } from './const';

export const addTodo = text => ({
  type: TODO_TYPE.ADD_TODO,
  text
});

export const delTodo = id => ({
  type: TODO_TYPE.DEL_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: TODO_TYPE.EDIT_TODO,
  id,
  text
});
