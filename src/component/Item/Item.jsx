import React from "react";
import PropTypes from "prop-types";
import "./Item.scss";
//import { Test } from './Item.styles';

function Item(props) {
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
}

Item.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
  // bla: PropTypes.string,
};

Item.defaultProps = {
  // bla: 'test',
};

export default Item;
