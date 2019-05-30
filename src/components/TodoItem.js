import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul>
          <li className="list-group-item text-capitalized d-flex justify-content-between my-2">
            <h6>{item}</h6>
            <div className="todo-icon">
              <span className="mx-2 text-success" onClick={handleEdit}>
                <i class="fas fa-pen    " />
              </span>
              <span className="mx-2 text-danger" onClick={handleDelete}>
                <i class="fas fa-trash" />
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
