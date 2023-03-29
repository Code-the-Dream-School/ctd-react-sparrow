import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemDescription.module.css";
import { Button, Input } from "antd";

const { TextArea } = Input;

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
          <TextArea
            className={styles.text_area}
            id="textDescription"
            value={textDescription}
            onChange={onChangeDescription}
            placeholder="Add Action Steps ..."
            autoSize={{ minRows: 5, maxRows: 50 }}
          ></TextArea>
          <div class="button-wrapper">
            <Button className={styles.button} type="primary" htmlType="submit">
              Add Algorithm
            </Button>
          </div>
        </form>
      </li>
    </div>
  );
};

DescriptionText.propTypes = {
  todoList: PropTypes.array,
  onEditDescription: PropTypes.func,
  table_name: PropTypes.string,
};

export default DescriptionText;
