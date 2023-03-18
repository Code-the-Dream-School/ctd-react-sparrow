import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemDescription.module.css";

const DescriptionText = ({ todoList, onEditDescription, tableName }) => {
  //State controls the text area, and makes this a controlled component
  const [textDescription, setTextDescription] = React.useState(
    todoList.fields.Description
  );

  //This handler gets the user input from the textarea
  const onChangeDescription = (e) => {
    const editDescription = e.target.value;
    setTextDescription(editDescription);
  };

  //Submit handler for text area form, sends data back to TodoContainer
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
      tableName
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
            placeholder="Add Action Steps ..."
          ></textarea>
          <div class="button-wrapper">
            <button className={styles.button} type="submit">
              Add Algorithm
            </button>
          </div>
        </form>
      </li>
    </div>
  );
};

DescriptionText.propTypes = {
  todoList: PropTypes.array,
  onEditDescription: PropTypes.func,
  tableId: PropTypes.string,
};

export default DescriptionText;
