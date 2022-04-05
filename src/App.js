import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./DemoCoponent/DemoFunctionComponent";
import { DemoClassComponent } from "./DemoCoponent/DemoClassComponent";
import BaiTapLayout from "./BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import HandlingEvent from "./HandlingEvent/HandlingEvent";
import DieuKien from "./DieuKien/DieuKien";
import BaiTapChonMauXe from "./BaiTapChonMauXe/BaiTapChonMauXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import Props from "./Props/Props";
import { dataProps } from "./Props/data";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import "antd/dist/antd.css";
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang";
import DemoMiniRedux from "./DemoMiniRedux/DemoMiniRedux";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHangRedux";
import LifeCycle from "./LifeCycle/LifeCycle";
import { Axios } from "axios";
import AxiosQuanLySinhVien from "./Axios-QuanLySinhVien/AxiosQuanLySinhVien";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import ChiTietSinhVien from "./Page-QLSV/ChiTietSinhVien/ChiTietSinhVien";
import HomePage from "./Page-QLSV/Home/HomePage";
import { Switch } from "react-router-dom";
import Navrouter from "./Component/NavRouter/Navrouter";
function App() {
  return (
    <BrowserRouter>
      <Navrouter/>
      <Switch>
      <Route exact path={"/"} component={HomePage}/>
      <Route path={"/dssv"} component={AxiosQuanLySinhVien} />
      <Route path={"/detail/:id"}  component={ChiTietSinhVien} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
