import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem'
//import { Test } from './TodoList.styles';

const TodoList = (props) => (
  <TodoItem items={props.items} delete={props.delete} />
);

TodoList.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
};

TodoList.defaultProps = {
  // bla: 'test',
};

export default TodoList;
