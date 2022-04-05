import { TANG } from "../constants/numberConstant";

export const tangSoLuongAction = (value) => {
  return {
    type: TANG,
    payload: value,
  };
};
