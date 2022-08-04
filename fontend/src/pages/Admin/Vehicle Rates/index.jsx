import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddVehicleRates from "../../../components/AddVehicleRates";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomSnackBar from "../../../components/common/SnakBar";
import RatesService from "../../../services/RatesService";



class VehicleRates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            vehicleRates: {},
            isUpdate: false,

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "rate_Id",
                    headerName: "Rate ID",
                    width: 228,
                },

                {
                    field: "daily_Rate",
                    headerName: "Daily Rate",
                    width: 228,
                },

                {
                    field: "free_Km_Day",
                    headerName: "Free Km For a Day",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "free_Km_Month",
                    headerName: "Free Km For a Month",
                    width: 228,
                },

                {
                    field: "monthly_rate",
                    headerName: "Monthly Rate",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "extra_Km_Price",
                    headerName: "Price Per Extra Km",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "action",
                    headerName: "Action",
                    width: 228,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton onClick={async () => {
                                        await this.updateRates(params.row);
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                        await this.deleteRates(params.row.rate_Id);
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.popup == true) {
            this.loadData()
        }
    }

    // deleteRates = async (id) => {
    //     let params = {
    //         id: id
    //     }
    //     let res = await RatesService.deleteRates(params);
    //     console.log(res)
    //     if (res.status === 200) {
    //         this.setState({
    //             alert: true,
    //             message: res.data.message,
    //             severity: 'success'
    //         });
    //         this.loadData();
    //     } else {
    //         this.setState({
    //             alert: true,
    //             message: res.message,
    //             severity: 'error'
    //         });
    //     }
    // }

    deleteRates = async (id) => {
        let params = {
            id: id
        }
        let res = await RatesService.deleteRates(params);
        console.log(res)
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: "delete successful",
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }

    updateRates = async (data) => {
        const row = data;
        let vehicleRates = {
            "rate_Id": row.rate_Id,
            "monthly_rate": row.monthly_rate,
            "daily_Rate": row.daily_Rate,
            "free_Km_Month": row.free_Km_Month,
            "free_Km_Day": row.free_Km_Day,
            "extra_Km_Price": row.extra_Km_Price
        }
        await this.setState({vehicleRates: vehicleRates});
        await this.setState({
            popup: true,
            isUpdate: true
        })
    }

    async loadData() {
        let resp = await RatesService.fetchRates();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.rate_Id;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
    }

    componentDidMount() {
        this.loadData();
        console.log("Mounted");
    }

    render() {
        const {classes} = this.props;
        return (
            <>

                <Grid container direction={"row"} columns="12">
                    <Grid item xs={"auto"}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs className="">
                        <Navbar/>
                        <Grid container item xs={"auto"} className="flex p-5 gap-5">
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                                <CommonButton
                                    variant="outlined"
                                    label="Add Vehicle Rate"
                                    onClick={() => this.setState({popup: true, isUpdate: false})}
                                    startIcon={<AddIcon/>}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                                style={{height: "700px"}}
                            >
                                <CommonDataTable
                                    columns={this.state.columns}
                                    rows={this.state.data}
                                    rowsPerPageOptions={5}
                                    pageSize={10}
                                    // checkboxSelection={true}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <CustomSnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />

                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                {this.state.isUpdate ? 'Update' : 'Add'} Vehicle Rates
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddVehicleRates isUpdate={this.state.isUpdate} obj={this.state.vehicleRates}/>
                    </DialogContent>
                </Dialog>

            </>
        );
    }

}

export default withStyles(styleSheet)(VehicleRates);
