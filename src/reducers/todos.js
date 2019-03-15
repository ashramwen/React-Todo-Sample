import { TODO_TYPE } from '../actions/const';

const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_TYPE.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((acc, cur) => Math.max(acc, cur.id) + 1, 0), // get highest id
          text: action.text,
          editing: false
        }
      ];
    case TODO_TYPE.DEL_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TODO_TYPE.SELECT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editing: !todo.editing } : todo
      );
    case TODO_TYPE.UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, text: action.text, editing: false }
          : todo
      );
    default:
      return state;
  }
};

export default todos;
