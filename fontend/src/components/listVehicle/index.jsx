import {Grid, Typography} from "@mui/material";
import React, {Component} from "react";
import PremiumCars from './../carSec/premiumCars';
import LuxuryCars from './../carSec/luxuryCars';
import GeneralCars from './../carSec/generalCars';

class ListVehicle extends Component {
  render() {
    return (
        <Grid
            container
            justifyContent="flex-start"
            alignItems="stretch"
            className="min-h-min bg-stone-900 bg-hero-pattern bg-cover bg-center bg-blend-overlay"
        >
          <Grid
              container
              justifyContent="flex-start"
              alignItems="stretch"
              className="backdrop-blur-md"
          >
            <Grid
                item
                direction="column"
                container
                className="bg-zinc-000 bg-red-000 text-white text-center"
            >
              <Grid item>
                <Typography
                    variant="h3"
                    component="h2"
                    className="font-extrabold p-5 pt-10 tracking-wide"
                >
                  Our Rental Vehicles
                </Typography>
              </Grid>
            </Grid>
            {/* General Car Section Start */}
            {/* <Grid
            container
            justifyContent="flex-start"
            alignItems="stretch"
            className="backdrop-blur-md"
          >
            <Grid
              item
              direction="column"
              container
              className="bg-zinc-000 bg-red-000 text-white text-center"
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  className="font-extrabold p-5 text-yellow-500"
                >
                  General Cars
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
              gap={5}
              item
              flex={"1"}
              className="p-6 w-min"
            >
              <Grid container item justifyContent="center" gap={5}>
                <VehicleCard />
                <VehicleCard />
                <VehicleCard />
                <VehicleCard />
              </Grid>
              <Grid>
                <CommonButton
                  size="large"
                  variant="outlined"
                  label="See More"
                  className="text-white border-white hover:bg-white hover:text-black font-bold"
                />
              </Grid>
            </Grid>
          </Grid> */}

            <GeneralCars/>
            <PremiumCars/>
            <LuxuryCars/>

            {/* General Car Section End */}
          </Grid>
        </Grid>
    );
  }
}

export default ListVehicle;
