import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from '../TodoItem';
//import { Test } from './TodoList.styles';

const TodoList = ({ items }) => {
  return items.map(o => <TodoItem key={o.id} todo={o} />);
};

TodoList.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
};

TodoList.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  items: state.todos
});

export default connect(mapStateToProps)(TodoList);
