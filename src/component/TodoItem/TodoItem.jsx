import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
//import { Test } from './TodoItem.styles';

const TodoItem = props => {
  let items = props.items.map((o, i) => (
    <div className="row justify-content-md-center" key={i}>
      <div className="card">
        <div className="card-body">
          {o}
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => props.delete(i)}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  ));
  return items;
};

TodoItem.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
};

TodoItem.defaultProps = {
  // bla: 'test',
};

export default TodoItem;
