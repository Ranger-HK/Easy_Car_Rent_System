import axios from "../axios"
import qs from "qs";

class VehicleService {
    postVehicle = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('Vehicle',data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehicles = async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('Vehicle')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    updateVehicle = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('Vehicle',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }

    deleteVehicle = async (params) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('Vehicle',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    countByStatus = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('Vehicle/count/status',{params:{status:data}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchVehiclesByStatus = async (status) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('Vehicle/status',{params:{status:status}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

}
export default new VehicleService();