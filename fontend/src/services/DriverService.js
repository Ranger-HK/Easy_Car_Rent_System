import axios from '../axios';
import qs from 'qs';

class DriverService {
    postDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Driver', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchDrivers = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Driver')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }


    deleteDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Driver', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    updateDriver = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('Driver',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new DriverService();