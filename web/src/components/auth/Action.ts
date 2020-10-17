import * as axios from 'axios';
import CONSTANT from '../../constant';
import { setCookie } from '../../utils';

export const registerCompany = (model: any) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/v1/auth/registration`, model)
        .then((res: any) => {
            if (res.data.status) {
                setCookie(CONSTANT.cookie.token, res.data.result.token);
                return res.data.result;
            }
            else
                alert(res.data.error ? res.data.error : 'Internal Error')
        })
        .catch((res: any) => {
            if (res)
                alert('Network Connection Error.')
        });
}

export const login = (model: any) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/v1/auth/login`, model)
        .then((res: any) => {
            if (res.data.status) {
                setCookie(CONSTANT.cookie.token, res.data.result.token);
                return res.data.result;
            }
            else
                alert(res.data.error ? res.data.error : 'Internal Error')
        })
        .catch((res: any) => {
            if (res)
                alert('Network Connection Error.')
        });
}