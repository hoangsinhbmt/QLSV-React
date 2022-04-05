import axios from "axios";

const BASE_URL = "https://620e4f4d585fbc3359ddab9b.mockapi.io/sinhvien";
export const sinhVienServ = {
  layDanhSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
};
