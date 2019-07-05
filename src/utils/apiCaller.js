import axios from 'axios';
import * as ApiConfig from './../constants/ApiConfig';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${ApiConfig.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};