import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import StraffService from "../../services/StraffService";
import CustomSnackBar from "../common/SnakBar";


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                staff_Id: props.isUpdate ? props.obj.staff_Id : '',
                name: props.isUpdate ? props.obj.name : '',
                address: props.isUpdate ? props.obj.address : '',
                mobile_Number: props.isUpdate ? props.obj.mobile_Number : '',
                email: props.isUpdate ? props.obj.email : '',
                password: props.isUpdate ? props.obj.password : '',
                type: props.isUpdate ? props.obj.type : 'Admin',
            },
            alert: false,
            message: '',
            severity: ''
        };
    }

    handleSubmit = async () => {
        let formData = this.state.formData
        if (this.props.isUpdate) {
            let res = await StraffService.updateStaff(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Employee Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Employee Update Unsuccessful!',
                    severity: 'error'
                })
            }
        } else {
            let res = await StraffService.postStaff(formData)
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Employee Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Employee Saved Unsuccessful!',
                    severity: 'error'
                });
            }
        }

    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "staff_Id":
                const staff_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {staff_Id: staff_Id}));
                // this.setState({ userId });
                break;

            case "name":
                const name = event.target.value;
                this.setState(Object.assign(this.state.formData, {name: name}));
                break;

            case "address":
                const address = event.target.value;
                this.setState(Object.assign(this.state.formData, {address: address}));
                break;

            case "mobile_Number":
                const mobile_Number = event.target.value;
                this.setState(Object.assign(this.state.formData, {mobile_Number: mobile_Number}));
                break;

            case "email":
                const email = event.target.value;
                this.setState(Object.assign(this.state.formData, {email: email}));
                break;

            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;

            case "type":
                const type = event.target.value;
                this.setState(Object.assign(this.state.formData, {type: type}));
                break;

            default:
                break;
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid container direction={'row'} xs={12} className={classes.container}>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={classes.validator}
                    >
                        <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                              alignContent={'center'}
                              className={classes.container}>
                            <Grid item container direction={'column'} xs={12} gap={'15px'}>
                                <TextValidator
                                    label="Employee ID"
                                    onChange={this.handleChange}
                                    name="staff_Id"
                                    value={this.state.formData.staff_Id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Name"
                                    onChange={this.handleChange}
                                    name="name"
                                    value={this.state.formData.name}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Address"
                                    onChange={this.handleChange}
                                    name="address"
                                    value={this.state.formData.address}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                    name="mobile_Number"
                                    value={this.state.formData.mobile_Number}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.formData.email}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    type={"password"}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Type"
                                    onChange={this.handleChange}
                                    name="type"
                                    disabled={true}
                                    value={this.state.formData.type}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <CommonButton
                                    size="large"
                                    variant="contained"
                                    label={this.props.isUpdate ? 'Update' : 'Add'}
                                    type="submit"
                                    className="text-white bg-blue-500 font-bold tracking-wide"
                                    style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                                />
                            </Grid>
                        </Grid>
                    </ValidatorForm>
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
            </>);
    }
}
export default withStyles(styleSheet)(AddEmployee);
