import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LoginIcon from '@mui/icons-material/Login';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import CarRentalIcon from '@mui/icons-material/CarRental';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PeopleIcon from '@mui/icons-material/People';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from "react-router-dom";


class Sidebar extends Component {
    render() {
        return (
            <Grid
                container
                direction={"column"}
                className="border-r-2 border-neutral-300 min-h-screen "
                bgcolor={"#121212"}

            >
                <Grid
                    item
                    container
                    className="h-12 p-4"
                    direction={"row"}
                    justifyContent="center"
                    alignItems={"center"}
                    alignContent="center"
                    bgcolor={"#121212"}
                >
                    <Typography className="text-xl  font-bold text-white font-dosis ">
                        Esay Car Rental
                    </Typography>
                </Grid>
                <hr className="border border-neutral-300" />
                <Grid item className="pl-2"  bgcolor={"#121212"}>
                    <ul>
                        <Typography variant="p" component={"p"} className="text-xs font-bold text-white mt-4 mb-1">
                            Main
                        </Typography>
                        <Link to={".."}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <DashboardIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Dashboard
                                </Typography>
                            </li>
                        </Link>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                            <CarRentalIcon className="text-white text-lg" />
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-white"
                            >
                                Rental Requests
                            </Typography>
                        </li>
                        <Typography variant="p" component={"p"} className="text-xs font-bold text-white mt-4 mb-1">
                            Vehicle Manage
                        </Typography>
                        <Link to={"../vehicleManage"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <DirectionsCarIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Vehicle Manage
                                </Typography>
                            </li>
                        </Link>

                        <Link to={"../VehicleRates"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <DirectionsCarIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Vehicle Rates
                                </Typography>
                            </li>
                        </Link>

                        <Link to={"../vehicleType"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <DirectionsCarIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Vehicle Types
                                </Typography>
                            </li>
                        </Link>
                        <Typography variant="p" component={"p"} className="text-xs font-bold text-white mt-4 mb-1">
                            Manage
                        </Typography>

                        <Link to={"../driverManage"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <PersonOutlineOutlinedIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Driver Manage
                                </Typography>
                            </li>
                        </Link>

                        <Link to={"../employeeManage"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                                <SupervisorAccountIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Employee Manage
                                </Typography>
                            </li>
                        </Link>

                        <Link to={"../customerManage"}>
                            <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500  m-1 rounded-lg">
                                <PeopleIcon className="text-white text-lg" />
                                <Typography
                                    variant="h6"
                                    component={"span"}
                                    className="text-sm font-semibold text-white"
                                >
                                    Customers Manage
                                </Typography>
                            </li>
                        </Link>

                        <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                            Useful
                        </Typography>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                            <CalculateIcon className="text-white text-lg" />
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-white"
                            >
                                Calculate Income
                            </Typography>
                        </li>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                            <AssessmentIcon className="text-white text-lg" />
                            <Typography
                                variant="h6"
                                component={"span"}
                                className="text-sm font-semibold text-white"
                            >
                                Daily Summry
                            </Typography>
                        </li>
                        <Typography variant="p" component={"p"} className="text-xs font-bold text-gray-600 mt-4 mb-1">
                            Profile
                        </Typography>
                        <li className="flex items-center gap-2 p-2 mr-3 cursor-pointer hover:bg-blue-500 m-1 rounded-lg">
                            <LoginIcon className="text-white text-lg" />
                            <Typography
                                variant="h5"
                                component={"span"}
                                className="text-sm font-semibold text-white"
                            >
                                Logout
                            </Typography>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        );
    }
}
export default Sidebar;