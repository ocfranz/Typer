import { TOGGLE_THEME } from "../actions/types";

const initialState = {
  theme: "light",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
