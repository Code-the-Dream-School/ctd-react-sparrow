import React from "react";
import style from "./ItemDescription.module.css";
import DescriptionText from "./DescriptionText";
import PropTypes from "prop-types";

const ItemDescription = ({
  todoList,
  itemDescription,
  onEditDescription,
  tableName,
}) => {
  return (
    <>
      <ul className={style.ul_el}>
        {todoList &&
          todoList.map((todo) => {
            if (todo.id === itemDescription) {
              return (
                <>
                  <DescriptionText
                    key={todo.id}
                    todoList={todo}
                    className={style.li_el}
                    onEditDescription={onEditDescription}
                    tableName={tableName}
                  />
                </>
              );
            }
            return null;
          })}
      </ul>
    </>
  );
};

ItemDescription.propTypes = {
  todoList: PropTypes.array,
  itemDescription: PropTypes.string,
  onEditDescription: PropTypes.func,
  tableName: PropTypes.string,
};

export default ItemDescription;
