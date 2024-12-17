import { CREATE_ITEM, READ_ITEMS, UPDATE_ITEM, DELETE_ITEM } from "../Action/ActionItem";

const initialState = {
    items: [], // Initial list of items
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case READ_ITEMS:
            return state;
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.updatedData }
                        : item
                ),
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
