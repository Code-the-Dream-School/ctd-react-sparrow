//This folder contains all the API functions

//Adding a task
export function fetchRequestAddTodo(newTodo, tableName) {
  return fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [newTodo] }),
    }
  ).then((response) => {
    return response.json()
  })
}

//Deleting a task
export function fetchRequestDeleteTodo(id, tableName) {
  return fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
    {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-type": "application/json",
      },
    }
  ).then((response) => response.json())
}

//Editing a task
export function fetchRequestEditTodo(id, newEditTodo, tableName) {
  return fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEditTodo),
    }
  ).then((response) => response.json())
}

//Sorting data
export function fetchRequestSortData(tableName, direction) {
  return fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${direction}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
  ).then((result) => {
    return result.json()
  })
}

//Adding a task description
export function fetchRequestEditDescription(id, newEditDescription, tableName) {
  return fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEditDescription),
    }
  ).then((response) => {
    return response.json()
  })
}
