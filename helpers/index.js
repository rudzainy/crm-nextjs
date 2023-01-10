import axiosClient from '../config/axios';

// obtains the data of the logged in seller
export const getCurrentSeller = () => JSON.parse(localStorage.getItem('userData'));

// returns a promise with all customers given the vendor id
export const getClients = (sellerId) => {
    return axiosClient.get(`/users?role=client&sellerId=${sellerId}`);
};
export const statusOptions = [
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
    { value: 'canceled', label: 'Canceled' },
];
