import { Cookies } from 'react-cookie';
import CONSTANT from './constant';

export const setCookie = (cookieName: string, token: any) => { 
    const cookies = new Cookies(); 
    cookies.set(cookieName, token, { path: '/' });
};

export const getCookie = (cookieName: string) => {  
    const cookie = new Cookies();
    const value = cookie.get(cookieName);
    return value;
};



export const getUserDetail = () => {  
    const token = getCookie(CONSTANT.cookie.token);
    if(token)
    return JSON.parse(window.atob(token.split('.')[1]));
    else return {}
}

export const removeAllCookies = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

export const getStorage = (keyName: string) => {  
    const item: any = localStorage.getItem(keyName);
    return JSON.parse(item);
}

export const getAuthHeader = () => {  
    const token = getCookie(CONSTANT.cookie.token);
    const header = {
        headers: { Authorization: "Bearer " + token }
    };
    return header;
}


export const onChange = (context: any, name: string, newValue: any, callback?: any) => {  
    context.setState({ [name]: { ...context.state[name], value: newValue } }, callback && callback);
}

export const setError = (context: any, name: string, error: string, callback?: any) => {  
    context.setState({ [name]: { ...context.state[name], error } }, callback && callback);
}

export const validateForm = (context: any) => {  
    const st = JSON.parse(JSON.stringify(context.state));
    let status = true;
    for (let key in st) {
        if (st.hasOwnProperty(key) && st[key]) {
            const name = st[key].name;
            const isRequired = st[key].isRequired;
            const value = st[key].value;

            if (isRequired && value.length === 0) {
                status = false;
                setError(context, name, 'This field is required');
            } else if (isRequired && value.length > 0) {
                setError(context, name, '');
            }
        }
    }
    return status;
}
