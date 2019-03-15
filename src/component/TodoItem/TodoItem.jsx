import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { updateTodo } from '../../actions';

import './TodoItem.scss';
//import { Test } from './TodoItem.styles';
import ListGroup from './ListGroup';
import EditGroup from './EditGroup';

const TodoItem = ({ todo }) => (
  <div className="row justify-content-md-center">
    <div className="card">
      <div className="card-body">
        <div className="input-group">
          {todo.editing ? (
            <>
              <EditGroup {...todo} />
            </>
          ) : (
            <>
              <ListGroup {...todo} />
            </>
          )}
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
  // updateTodo: (id, text) => updateTodo(id, text)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
