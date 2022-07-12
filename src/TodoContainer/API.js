//This folder contains all the API functions

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

export function fetchRequestSortData() {}

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
