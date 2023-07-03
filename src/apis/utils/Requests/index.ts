import { requestModel } from '../models/requestModel';
import { requestMethod } from '../constants/constants';
import { axiosRequest } from '../config/axios/axiosRequest';

const GET = async (url: string, params = {}) => {
  const reqestObj: requestModel = new requestModel();
  try {
    const token = JSON.parse(localStorage.getItem('token') || 'undefined');
    reqestObj.headers.Authorization =
      token != 'undefined' ? `Bearer ${token}` : ``;
    reqestObj.method = requestMethod.GET;
    reqestObj.url = url;
    reqestObj.params = params;
    return await axiosRequest.request(reqestObj);
  } catch (error) {
    console.log('error from Get Request::>', error);
  }
};
const POST = async (url: string, body = {}) => {
  const reqestObj: requestModel = new requestModel();
  try {
    const token = JSON.parse(localStorage.getItem('token') || 'undefined');
    reqestObj.headers.Authorization =
      token != 'undefined' ? `Bearer ${token}` : ``;
    reqestObj.method = requestMethod.POST;
    reqestObj.url = url;
    reqestObj.data = body;
    return await axiosRequest.request(reqestObj);
  } catch (error) {
    console.log('error from Get Request::>', error);
  }
};
const PUT = async (url: string, body = {}) => {
  const reqestObj: requestModel = new requestModel();
  try {
    const token = JSON.parse(localStorage.getItem('token') || 'undefined');
    reqestObj.headers.Authorization =
      token != 'undefined' ? `Bearer ${token}` : ``;
    reqestObj.method = requestMethod.PUT;
    reqestObj.url = url;
    reqestObj.data = body;
    return await axiosRequest.request(reqestObj);
  } catch (error) {
    console.log('error from Get Request::>', error);
  }
};
const DELETE = async (url: string, body = {}) => {
  const reqestObj: requestModel = new requestModel();
  try {
    const token = JSON.parse(localStorage.getItem('token') || 'undefined');
    reqestObj.headers.Authorization =
      token != 'undefined' ? `Bearer ${token}` : ``;
    reqestObj.method = requestMethod.DELETE;
    reqestObj.url = url;
    reqestObj.data = body;
    return await axiosRequest.request(reqestObj);
  } catch (error) {
    console.log('error from Get Request::>', error);
  }
};
export { GET, POST, PUT, DELETE };
