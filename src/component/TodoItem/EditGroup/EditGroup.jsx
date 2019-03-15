import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTodo, updateTodo } from '../../../actions';
//import { Test } from './EditGroup.styles';

const EditGroup = ({ id, text, selectTodo, updateTodo }) => {
  let textInput = React.createRef();

  const onUpdate = () => {
    console.log(textInput.current.value);
    if (!textInput.current.value.trim()) {
      textInput.current.value = text;
      selectTodo(id);
    } else {
      updateTodo(id, textInput.current.value.trim());
    }
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        defaultValue={text}
        ref={textInput}
      />
      <div className="input-group-append">
        <button type="button" className="btn btn-info" onClick={onUpdate}>
          Submit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => selectTodo(id)}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

EditGroup.propTypes = {
  id: PropTypes.number,
  onUpdate: PropTypes.func
};

EditGroup.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = {
  selectTodo: id => selectTodo(id),
  updateTodo: (id, text) => updateTodo(id, text)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGroup);
