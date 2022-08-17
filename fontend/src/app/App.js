import React from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Admin/Dashboard";
import NotFound from '../pages/Session/NotFound'
import {Route, Routes} from "react-router-dom";
import VehicleManage from "../pages/Admin/Vehicle Manage";
import AddNewVehicle from "../components/AddVehicle";
import LoginAdmin from "../pages/Session/Login/adminLogin";
import LoginDriver from "../pages/Session/Login/driverLogin";
import VehicleType from "../pages/Admin/Vehicle Types";
import VehicleRates from "../pages/Admin/Vehicle Rates";
import DriverManage from "../pages/Admin/Driver Manage";
import CustomerManage from "../pages/Admin/Customer Manage";
import EmployeeManage from "../pages/Admin/Employee Manage";
import RegisterCustomer from "../components/registerCustomer";


function App() {
    return (

        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="/register" element={<RegisterCustomer/>}/>

            <Route path="admin">
                <Route index element={<LoginAdmin/>}/>
                <Route path="dashboard">
                    <Route index element={<Dashboard/>}/>
                    <Route path="vehicleManage" element={<VehicleManage/>}/>
                    <Route path="test" element={<AddNewVehicle/>}/>
                    <Route path="vehicleRates" element={<VehicleRates/>}/>
                    <Route path="vehicleType" element={<VehicleType/>}/>
                    <Route path="driverManage" element={<DriverManage/>}/>
                    <Route path="customerManage" element={<CustomerManage/>}/>
                    <Route path="employeeManage" element={<EmployeeManage/>}/>
                </Route>
            </Route>

            <Route path="driver">
                <Route index element={<LoginDriver/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}

export default App;
