import React, {Component} from 'react';
import {dividerClasses, Typography} from "@mui/material";

class Hero extends Component {
    render() {
        return (
            <div className={'h-screen bg-black flex flex-col justify-center item-center'}>
                <div className={'bg-bgImg w-screen h-4/5 bg-contain bg-origin-border bg-right bg-no-repeat bg-black flex flex-col  justify-center item-center'}>
                    <div className={'flex flex-col pl-7'}>
                        <Typography className={'text-white font-bold  mt-1.5  '}   variant="h3" component={'p'}>Visit Us And<Typography className={'text-red font-bold  mt-1.5  '}   variant="h2" component={'p'}>Rent Your Dream Car</Typography> </Typography>
                        <Typography className={'text-white font-bold  mt-1.5  '}   variant="h3">With the Lowest Price Range</Typography>

                    </div>


                </div>
                2

            </div>
        );
    }
}

export default Hero;