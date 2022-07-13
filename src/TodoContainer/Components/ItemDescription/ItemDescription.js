import React from "react"
import style from "./ItemDescription.module.css"
import DescriptionText from "./DescriptionText"
import PropTypes from "prop-types"

const ItemDescription = ({
  todoList,
  itemDescription,
  onEditDescription,
  tableName,
}) => {
  return (
    <>
      <ul className={style.ul_el}>
        {todoList.map((todoList) => {
          if (todoList.id === itemDescription)
            return (
              <>
                <DescriptionText
                  key={todoList.id}
                  todoList={todoList}
                  className={style.li_el}
                  onEditDescription={onEditDescription}
                  tableName={tableName}
                />
              </>
            )
        })}
      </ul>
    </>
  )
}

DescriptionText.prototype = {
  todoList: PropTypes.array,
  itemDescription: PropTypes.string,
  onEditDescription: PropTypes.func,
  tableId: PropTypes.string,
}

export default ItemDescription
