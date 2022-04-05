import { GIAM, TANG } from "../constants/numberConstant";

let initailState = {
  number: 100,
};

export let numberReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case TANG: {
      state.number += payload;
      return { ...state };
    }
    case GIAM: {
      state.number -= payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
