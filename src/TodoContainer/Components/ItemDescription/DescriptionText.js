import React from "react";
import style from "./ItemDescription.module.css";
import PropTypes from "prop-types";

const DescriptionText = ({ todoList, onEditDescription, tableId }) => {
  //State controls the text area, and makes this a controlled component
  const [textDescription, setTextDescription] = React.useState(
    todoList.fields.Description
  );

  //This handler gets the user input from the textarea
  const onChangeDescription = (e) => {
    const editDescription = e.target.value;
    setTextDescription(editDescription);
  };

  //Submit handler for textarea form, sends data back to TodoContainer
  const onSubmit = (e) => {
    e.preventDefault();
    onEditDescription(
      todoList.id,
      {
        fields: {
          Title: todoList.fields.Title,
          Description: textDescription,
        },
      },
      tableId
    );
  };

  return (
    <div>
      <li>
        <form onSubmit={onSubmit}>
          <label htmlFor="textDescription">{todoList.fields.Title}</label>
          <textarea
            id="textDescription"
            value={textDescription}
            onChange={onChangeDescription}
            placeholder="Description"
            className={style.text_el}
          ></textarea>
          <button type="submit">add</button>
        </form>
      </li>
    </div>
  );
};

DescriptionText.prototype = {
  todoList: PropTypes.array,
  onEditDescription: PropTypes.func,
  tableId: PropTypes.string,
};

//To do List for CSS:
// [] Make the width of the button 100%

export default DescriptionText;
