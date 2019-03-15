import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
//import { Test } from './TodoInput.styles';

const TodoInput = React.forwardRef((props, ref) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Todo description"
      ref={ref}
    />
  );
});

// TodoInput.propTypes = {
//   ref: PropTypes.object
// };

// TodoInput.defaultProps = {
//   // bla: 'test',
// };

// const mapStateToProps = state => ({
//   text: state.blabla
// });

// const mapDispatchToProps = dispatch => ({
//   fnBlaBla: () => dispatch(action.name()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoInput);

export default TodoInput;
