// Action Types
export const CREATE_ITEM = "CREATE_ITEM";
export const READ_ITEMS = "READ_ITEMS";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// Action Creators
export const createItem = (item) => ({
    type: CREATE_ITEM,
    payload: item,
});

export const readItems = () => ({
    type: READ_ITEMS,
});

export const updateItem = (id, updatedData) => ({
    type: UPDATE_ITEM,
    payload: { id, updatedData },
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});
