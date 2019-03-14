import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, editTodo, addFunc } from '../../actions';
//import { Test } from './Add.styles';

const Add = ({ current, edit_mode, dispatch }) => {
  let textInput = React.createRef();
  const onSubmit = e => {
    e.preventDefault();
    if (!textInput.current.value) return;
    if (edit_mode) {
      dispatch(editTodo(current.id, textInput.current.value));
    } else {
      dispatch(addTodo(textInput.current.value));
    }
    textInput.current.value = '';
  };

  const onCancelEdit = () => {
    textInput.current.value = '';
    dispatch(addFunc());
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{edit_mode ? 'Edit' : 'Add'} item</h5>
        <div className="card-text">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Todo description"
                ref={textInput}
                // defaultValue={current.text}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  {edit_mode ? 'Edit' : 'Add'}
                </button>
                {edit_mode && (
                  <button className="btn btn-danger" onClick={onCancelEdit}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Add.propTypes = {
  add: PropTypes.func,
  handleChange: PropTypes.func,
  text: PropTypes.string
};

Add.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({ ...state.func });

export default connect(mapStateToProps)(Add);
