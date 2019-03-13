import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
//import { Test } from './List.styles';

function List(props) {
  return <Item items={props.items} delete={props.delete} />;
}

List.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
};

List.defaultProps = {
  // bla: 'test',
};

export default List;
