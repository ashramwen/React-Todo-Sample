import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delTodo, selectTodo } from '../../../actions';
//import { Test } from './ListGroup.styles';

const ListGroup = ({ id, text, selectTodo, delTodo }) => (
  <>
    <div className="todo-list">{text}</div>
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => selectTodo(id)}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => delTodo(id)}
      >
        Del
      </button>
    </div>
  </>
);

ListGroup.propTypes = {
  id: PropTypes.number,
  selectTodo: PropTypes.func,
  delTodo: PropTypes.func
};

ListGroup.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = {
  delTodo: id => delTodo(id),
  selectTodo: id => selectTodo(id)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroup);
