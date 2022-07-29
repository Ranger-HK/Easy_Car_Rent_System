import axios from '../axios';
import qs from 'qs';

class StaffService {
    postStaff = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('staff', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchStaff = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('staff')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteStaff = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('staff', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    updateStaff = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('staff', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new StaffService();