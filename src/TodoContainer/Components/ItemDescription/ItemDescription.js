import React from "react";
import style from "./ItemDescription.module.css";

function ItemDescription({ todoList, itemDescription }) {
  // const description = 0;
  // for (description)

  //Make a controlled component and work with the data from airtable

  // const [itemDescription, setItemDescription] = React.useState("");

  // const handleDesChange = (e) => {
  //   setItemDescription(e.todoList.fields.Description);
  // };
  //states
  // const [description, setDescription] = React.useState(todoList.fields.Title);

  return (
    <>
      <ul className={style.ul_el}>
        {todoList.map((todoList) => {
          if (todoList.id === itemDescription)
            return (
              <li key={todoList.id} className={style.li_el}>
                <textarea
                  // value={description}
                  placeholder="Description"
                  className={style.text_el}
                  // onEdit={onEdit}
                >
                  {todoList.fields.Description}
                </textarea>
              </li>
            );
        })}
      </ul>
    </>
  );
}

export default ItemDescription;
