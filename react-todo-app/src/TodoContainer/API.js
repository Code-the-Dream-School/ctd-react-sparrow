import axios from "axios";

const airtableBaseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

const apiUrl = `https://api.airtable.com/v0/${airtableBaseId}`;

export const requestGetTodo = async (tableName) => {
  try {
    const response = await axios.get(`${apiUrl}/${tableName}`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestAddTodo = async (newTodo, tableName) => {
  try {
    const response = await axios.post(
      `${apiUrl}/${tableName}`,
      { records: [newTodo] },
      {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestDeleteTodo = async (id, tableName) => {
  try {
    const response = await axios.delete(`${apiUrl}/${tableName}/${id}`, {
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        "Content-type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestEditTodo = async (id, newEditTodo, tableName) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/${tableName}/${id}`,
      newEditTodo,
      {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestSortData = async (tableName, direction) => {
  try {
    const response = await axios.get(
      `${apiUrl}/${tableName}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${direction}`,
      {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const requestEditDescription = async (
  id,
  newEditDescription,
  tableName
) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/${tableName}/${id}`,
      newEditDescription,
      {
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function requestEditCheck(tableName, id, checkItem) {
  try {
    const response = await axios.patch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
      checkItem,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("There is an issue");
    }
  } catch (error) {
    console.log(error);
  }
}
