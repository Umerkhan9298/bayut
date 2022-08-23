import { LAYOUT_CHANGE } from "../constants";

export const layoutChange = (data) => {
  return {
    type: LAYOUT_CHANGE,
    payload: data,
  };
};
