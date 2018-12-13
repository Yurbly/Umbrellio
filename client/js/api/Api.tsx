import axios from 'axios';

export const REST_API_URL = '/todos/';

export const HTTP_STATUS_CODE_OK = 200;
export const HTTP_STATUS_CODE_NOT_ACCEPTABLE = 406;
export const HTTP_STATUS_CODE_UNPROCESSABLE_ENTITY = 422;
export const HTTP_STATUS_CODE_BAD_REQUEST = 400;
export const HTTP_STATUS_CODE_WARN = 203;

const instance = axios.create({
    baseURL: REST_API_URL,
    timeout: 20000,
    // withCredentials: true
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    // }

});

export function post(url:string, body:any) {
    return instance.post(url, body);
}

export function get(url:string) {
    return instance.get(url);
}

export function put(url:string, body:any) {
    return instance.put(url, body);
}

export function remove(url:string) {
    return instance.delete(url);
}