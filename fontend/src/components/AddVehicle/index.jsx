import {Button, Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import MenuItem from '@mui/material/MenuItem';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CommonButton from "../common/Button";
import VehicleTypeService from "../../services/VehicleTypeService";
import VehicleService from "../../services/VehicleService";
import CustomSnackBar from "../common/SnakBar";
import RatesService from "../../services/RatesService";


class AddNewVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "registration_Number": props.isUpdate ? props.obj.registration_Number : '',
                "brand": props.isUpdate ? props.obj.brand : '',
                "colour": props.isUpdate ? props.obj.colour : '',
                "status": props.isUpdate ? props.obj.status : '',
                "no_Of_Passengers": props.isUpdate ? props.obj.no_Of_Passengers : '',
                "running_Km": props.isUpdate ? props.obj.running_Km : '',
                "fuel_Type": props.isUpdate ? props.obj.fuel_Type : '',
                "transmission_Type": props.isUpdate ? props.obj.transmission_Type : '',
                "vehicleType": {
                    "vehicle_Type_Id": props.isUpdate ? props.obj.vehicleType.vehicle_Type_Id : '',
                    "loss_Damage_Waiver": props.isUpdate ? props.obj.vehicleType.loss_Damage_Waiver : '',
                    "type": props.isUpdate ? props.obj.vehicleType.type : '',
                },
                "rates": {
                    "rate_Id": props.isUpdate ? props.obj.rates.rate_Id : '',
                    "monthly_rate": props.isUpdate ? props.obj.rates.monthly_rate : '',
                    "daily_Rate": props.isUpdate ? props.obj.rates.daily_Rate : '',
                    "free_Km_Month": props.isUpdate ? props.obj.rates.free_Km_Month : '',
                    "free_Km_Day": props.isUpdate ? props.obj.rates.free_Km_Day : '',
                    "extra_Km_Price": props.isUpdate ? props.obj.rates.extra_Km_Price : '',
                },

            },
            ratesData: [],
            typeData: [],

            alert: false,
            message: '',
            severity: ''
        };
    }

    fetchRatesDataForSelect = async () => {
        const rates = await RatesService.fetchRates();
        let ratesData = [];
        if (rates.status === 200) {
            rates.data.data.map((value, index) => {
                ratesData.push(value)
            })
            this.setState({
                ratesData: ratesData,
            })
            // console.log('frd')
        }
    }

    fetchVTypeDataForSelect = async () => {
        const res = await VehicleTypeService.fetchVehicleType();
        let typeData = [];
        if (res.status === 200) {
            res.data.data.map((value, index) => {
                typeData.push(value)
                console.log(value)
            })
            this.setState({
                typeData: typeData,
            })
        }

    }

    async componentDidMount() {
        await this.fetchRatesDataForSelect()
        await this.fetchVTypeDataForSelect()
        console.log("balanna", this.props.obj)
    }

    handleSubmit = async () => {
        console.log("hi")
        let formDate = this.state.formData
        if (this.props.isUpdate) {
            let res = await VehicleService.updateVehicle(formDate)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Vehicle Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'error'
                })
            }
        } else {
            let res = await VehicleService.postVehicle(formDate)
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Vehicle Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'error'
                })
            }
        }
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "registration_Number":
                const registration_Number = event.target.value;
                this.setState(Object.assign(this.state.formData, {registration_Number: registration_Number}));
                // this.setState({ userId });
                break;

            case "brand":
                const brand = event.target.value;
                this.setState(Object.assign(this.state.formData, {brand: brand}));
                break;

            case "colour":
                const colour = event.target.value;
                this.setState(Object.assign(this.state.formData, {colour: colour}));
                break;

            case "no_Of_Passengers":
                const no_Of_Passengers = event.target.value;
                this.setState(Object.assign(this.state.formData, {no_Of_Passengers: no_Of_Passengers}));
                break;

            case "running_Km":
                const running_Km = event.target.value;
                this.setState(Object.assign(this.state.formData, {running_Km: running_Km}));
                break;

            case "fuel_Type":
                const fuel_Type = event.target.value;
                this.setState(Object.assign(this.state.formData, {fuel_Type: fuel_Type}));
                break;

            case "transmission_Type":
                const transmission_Type = event.target.value;
                this.setState(Object.assign(this.state.formData, {transmission_Type: transmission_Type}));
                break;

            case "rate_Id":
                const rate_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {rates: {rate_Id: rate_Id}}));
                break;

            case "vehicle_Type_Id":
                const vehicle_Type_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {vehicleType: {vehicle_Type_Id: vehicle_Type_Id}}));
                break;

            case "status":
                const status = event.target.value;
                this.setState(Object.assign(this.state.formData, {status: status}));
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
                            <Grid item container direction={'column'} xs={5.5} gap={'15px'}>
                                <TextValidator
                                    label="Registration Number"
                                    onChange={this.handleChange}
                                    name="registration_Number"
                                    value={this.state.formData.registration_Number}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Brand"
                                    onChange={this.handleChange}
                                    name="brand"
                                    value={this.state.formData.brand}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Color"
                                    onChange={this.handleChange}
                                    name="colour"
                                    value={this.state.formData.colour}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="No of Passengers"
                                    onChange={this.handleChange}
                                    name="no_Of_Passengers"
                                    value={this.state.formData.no_Of_Passengers}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    type={"number"}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Running Km"
                                    onChange={this.handleChange}
                                    name="running_Km"
                                    value={this.state.formData.running_Km}
                                    validators={["required", ['isFloat']]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                            </Grid>
                            <Grid container direction={'column'} item xs={5.5} gap={'15px'}>

                                <TextValidator
                                    select
                                    label="Fuel Type"
                                    name="fuel_Type"
                                    onChange={this.handleChange}
                                    value={this.state.formData.fuel_Type}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={'Petrol'} value={'Petrol'}>Petrol</MenuItem>
                                    <MenuItem key={'Diesel'} value={'Diesel'}>Diesel</MenuItem>
                                    <MenuItem key={'Electric'} value={'Electric'}>Electric</MenuItem>
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Transmission Type"
                                    name="transmission_Type"
                                    onChange={this.handleChange}
                                    value={this.state.formData.transmission_Type}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={"Auto"} value={"Auto"}>Auto</MenuItem>
                                    <MenuItem key={"Manual"} value={"Manual"}>Manual</MenuItem>
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Rates"
                                    name="rate_Id"
                                    onChange={this.handleChange}
                                    value={this.state.formData.rates.rate_Id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    {this.state.ratesData.map((option) => (
                                        <MenuItem key={option.rate_Id} value={option.rate_Id}>
                                            {option.rate_Id}
                                        </MenuItem>
                                    ))}
                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Vehicle Type"
                                    name="vehicle_Type_Id"
                                    onChange={this.handleChange}
                                    value={this.state.formData.vehicleType.vehicle_Type_Id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >

                                    {this.state.typeData.map((option) => (
                                        <MenuItem key={option.vehicle_Type_Id} value={option.vehicle_Type_Id}>
                                            {option.vehicle_Type_Id}
                                        </MenuItem>
                                    ))}

                                </TextValidator>

                                <TextValidator
                                    select
                                    label="Status"
                                    name="status"
                                    onChange={this.handleChange}
                                    value={this.state.formData.status}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                >
                                    <MenuItem key={'Available'} value={'Available'}>Available</MenuItem>
                                    <MenuItem key={'Reserved'} value={'Reserved'}>Reserved</MenuItem>
                                    <MenuItem key={'Under Maintains'} value={'Under Maintains'}>Under
                                        Maintains</MenuItem>
                                    <MenuItem key={'Need Maintains'} value={'Need Maintains'}>Need Maintains</MenuItem>
                                </TextValidator>


                            </Grid>
                            <Grid container direction={'row'} xs={12} justifyContent={'center'}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<AddPhotoAlternateIcon className={classes.icon}/>}
                                    sx={{marginRight: "1rem"}}
                                    className={classes.btnUpload}
                                >
                                    Upload Image
                                    <input type="file" accept="image/*" hidden/>
                                </Button>
                            </Grid>
                            <CommonButton
                                size="large"
                                variant="contained"
                                label={this.props.isUpdate ? 'Update' : 'Add'}
                                type="submit"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                                style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                            />
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
            </>
        );
    }
}

export default withStyles(styleSheet)(AddNewVehicle);