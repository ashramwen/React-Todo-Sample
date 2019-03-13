import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Add.styles';

function Add({ onAdd }) {
  let textInput = React.createRef();

  function onSubmit(e) {
    e.preventDefault();
    if (!textInput.current.value) return;
    onAdd(textInput.current.value);
    textInput.current.value = "";
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add item</h5>
        <div className="card-text">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Todo description"
                ref={textInput}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Add.propTypes = {
  add: PropTypes.func,
  handleChange: PropTypes.func,
  text: PropTypes.string
};

Add.defaultProps = {
  // bla: 'test',
};

export default Add;
