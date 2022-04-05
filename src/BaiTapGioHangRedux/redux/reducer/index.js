import { combineReducers } from "redux";
import { baiTapGioHangReducer } from "./baiTapGioHangReducer";

export const rootReducerGioHang = combineReducers({
  baiTapGioHangReducer,
});
