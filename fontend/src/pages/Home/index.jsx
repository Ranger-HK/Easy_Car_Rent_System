import React, { Component } from 'react'
import NavBar from '../../components/NavBar'
import Hero from '../../components/hero/hero'
import ListVehicle from "../../components/listVehicle";
import Footer from "../../components/Footer";

class Home extends Component {
    render() {
        return (
            <div>

                <NavBar/>
                <Hero/>
                <ListVehicle/>
                <Footer/>

            </div>
        )
    }
}
export default Home