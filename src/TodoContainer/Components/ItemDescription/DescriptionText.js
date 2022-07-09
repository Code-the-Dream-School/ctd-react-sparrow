import React from "react";
import style from "./ItemDescription.module.css";
import PropTypes from "prop-types";
import styles from "./ItemDescription.module.css";

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
          <label htmlFor="textDescription" className={styles.title}>
            {todoList.fields.Title}:
          </label>
          <textarea
            className={styles.text_area}
            id="textDescription"
            value={textDescription}
            onChange={onChangeDescription}
            placeholder="Add a description"
          ></textarea>
          <button className={styles.button} type="submit">
            add description
          </button>
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
