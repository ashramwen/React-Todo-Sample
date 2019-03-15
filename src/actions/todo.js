import { TODO_TYPE } from './const';

export const addTodo = text => ({
  type: TODO_TYPE.ADD_TODO,
  text
});

export const delTodo = id => ({
  type: TODO_TYPE.DEL_TODO,
  id
});

export const selectTodo = (id) => ({
  type: TODO_TYPE.SELECT_TODO,
  id
});

export const updateTodo = (id, text) => ({
  type: TODO_TYPE.UPDATE_TODO,
  id,
  text
});