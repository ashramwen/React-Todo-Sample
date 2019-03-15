import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
//import { Test } from './Add.styles';
import TodoInput from './TodoInput/index';

const Add = ({ dispatch }) => {
  let textInput = React.createRef();

  const onSubmit = e => {
    e.preventDefault();
    if (!textInput.current.value.trim()) return;
    dispatch(addTodo(textInput.current.value.trim()));
    textInput.current.value = '';
  };

  useEffect(() => {
    // console.log('textInput', textInput);
  });

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add item</h5>
        <div className="card-text">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <TodoInput ref={textInput} />
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
};

// Add.propTypes = {

// };

// Add.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = state => ({ ...state.func });

export default connect(mapStateToProps)(Add);
