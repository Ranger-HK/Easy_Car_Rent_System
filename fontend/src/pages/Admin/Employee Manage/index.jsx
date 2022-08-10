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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StraffService from "../../../services/StraffService";
import CustomSnackBar from "../../../components/common/SnakBar";
import AddEmployee from "../../../components/AddEmployee";

class EmployeeManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            updateEmployee: {},
            isUpdate: false,

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "staff_Id",
                    headerName: "Employee ID",
                    width: 200,
                },

                {
                    field: "name",
                    headerName: "Name",
                    width: 200,
                },

                {
                    field: "address",
                    headerName: "Address",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "mobile_Number",
                    headerName: "Mobile No.",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "email",
                    headerName: "Email",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "password",
                    headerName: "Password",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "type",
                    headerName: "Type",
                    width: 200,
                    sortable: false,
                },

                {
                    field: "action",
                    headerName: "Action",
                    width: 200,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton onClick={async () => {
                                        await this.updateEmployee(params.row);
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                        await this.deleteEmployee(params.row.staff_Id);
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
        console.log("did")
        if (prevState.popup == true){
            console.log("did t")
            this.loadData()
        }
    }

    updateEmployee = async (data) => {
        const row = data;
        let updateEmployee={
            staff_Id: row.staff_Id,
            name: row.name,
            address: row.address,
            mobile_Number: row.mobile_Number,
            email: row.email,
            password: row.password,
            type: row.type,
        }
        await this.setState({updateEmployee:updateEmployee});
        await this.setState({
            popup:true,
            isUpdate:true
        })
    }
    deleteEmployee = async (id) => {
        let params = {
            id: id
        }
        let res = await StraffService.deleteStaff(params);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }

    async loadData() {
        let resp = await StraffService.fetchStaff();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.staff_Id;
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
                                    label="Add Employee"
                                    onClick={() => this.setState({popup: true,isUpdate:false})}
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
                                {this.state.isUpdate ? 'Update' : 'Add'} Employee
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddEmployee isUpdate={this.state.isUpdate} obj={this.state.updateEmployee}/>
                    </DialogContent>
                </Dialog>
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
            </>);
    }
}

export default withStyles(styleSheet)(EmployeeManage);