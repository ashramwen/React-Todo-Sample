import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delTodo, selectFunc } from '../../actions';

import './TodoItem.scss';
//import { Test } from './TodoItem.styles';

const TodoItem = ({ item, delTodo, selectFunc }) => (
  <div className="row justify-content-md-center">
    <div className="card">
      <div className="card-body">
        {item.text}
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => selectFunc(item)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => delTodo(item.id)}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  </div>
);

TodoItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

TodoItem.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  delTodo: id => delTodo(id),
  selectFunc: item => selectFunc(item)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
