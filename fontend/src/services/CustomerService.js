import axios from '../axios';
import qs from 'qs';

class CustomerService {
    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Customer/upload', data )
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    fetchCustomers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Customer')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    deleteCustomers = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Customer',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }

    customerCount = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Customer/count')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
}
export default new CustomerService();