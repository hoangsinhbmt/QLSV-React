import {
  SET_DANH_SACH_SV,
  SUA_SINH_VIEN,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../constant/quanlySVConstant";

let initialState = {
  dssv: [],
  editSinhVien: null,
};

export const quanlySVReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_SV: {
      state.dssv = action.payload;
      return { ...state };
    }
    case THEM_SINH_VIEN: {
      let cloneArr = [...state.dssv];
      cloneArr.push(action.payload);
      state.dssv = cloneArr;
      return { ...state };
    }
    case XOA_SINH_VIEN: {
      let id = action.payload;

      let cloneArr = [...state.dssv];
      let index = cloneArr.findIndex((sv) => {
        return sv.id == id;
      });
      index !== -1 && cloneArr.splice(index, 1);
      state.dssv = cloneArr;
      return { ...state };
    }
    case SUA_SINH_VIEN: {
      state.editSinhVien=action.payload;
      return {...state}

      // let cloneArr = [...state.dssv];
      // let index = cloneArr.findIndex((sv) => {
      //   return sv.id === editSinhVien.id;
      // });

      // if(index !== -1){
      //   state.editSinhVien = 
      // }
    }

    default:
      return { ...state };
  }
};
