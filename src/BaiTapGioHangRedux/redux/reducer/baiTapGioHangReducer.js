import { dataBaiTapGioHang } from "../../data";
import {
  SAN_PHAM_CHI_TIET,
  THAY_DOI_SO_LUONG,
  THEM_GIOI_HANG,
} from "../constant/gioHangContant";

let initialState = {
  dsdt: dataBaiTapGioHang,
  sanPhamChiTiet: dataBaiTapGioHang[0],
  gioHang: [],
};

export const baiTapGioHangReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    // case value:

    //     break;
    case SAN_PHAM_CHI_TIET: {
      state.sanPhamChiTiet = payload;
      return { ...state };
    }
    case THEM_GIOI_HANG: {
      console.log("yes");
      let cloneGioHang = [...state.gioHang];
      let index = cloneGioHang.findIndex((item) => {
        return item.id == payload.id;
      });
      if (index == -1) {
        let newObject = { ...payload, soluong: 1 };
        cloneGioHang.push(newObject);
      } else {
        cloneGioHang[index].soluong++;
      }
      state.gioHang = cloneGioHang;

      return { ...state };
    }
    case THAY_DOI_SO_LUONG: {
      let id = payload;
      let realId = id < 0 ? id * -1 : id;
      let cloneGioHang = [...state.gioHang];
      let index = cloneGioHang.findIndex((item) => {
        return item.id == realId;
      });
      id > 0 && index !== -1 && cloneGioHang[index].soluong++;
      id < 0 &&
        index !== -1 &&
        cloneGioHang[index].soluong-- &&
        cloneGioHang[index].soluong == 0 &&
        cloneGioHang.splice(index, 1);
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
