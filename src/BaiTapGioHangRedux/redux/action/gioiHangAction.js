import {
  SAN_PHAM_CHI_TIET,
  THAY_DOI_SO_LUONG,
  THEM_GIOI_HANG,
} from "../constant/gioHangContant";

export const SanPhamChiTietAction = (value) => {
  return {
    type: SAN_PHAM_CHI_TIET,
    payload: value,
  };
};

export const themGioiHangAction = (value) => {
  return {
    type: THEM_GIOI_HANG,
    payload: value,
  };
};
export const thayDoiSoLuongAction = (value) => {
  return {
    type: THAY_DOI_SO_LUONG,
    payload: value,
  };
};
