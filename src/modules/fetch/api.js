import Axios from 'axios';

const Api = Axios.create({
  baseURL: process.env.REACT_APP_DM_URL,
});
const statusData = { type: 'success', status: '200', msg: '' };

export const requestPost = async req => {
  let getData = { status: statusData, data: {} };
  try {
    console.log('req:::::', req);
    const resp = await Api.post(req.url, req.param);
    getData = { ...getData, data: resp.data };
  } catch (e) {
    const statusSet = { ...statusData, status: '400', msg: e.message };
    getData = { ...getData, status: statusSet };
  }
  return getData;
};

export const requestGet = async req => {
  let getData = { status: statusData, data: {} };
  try {
    const resp = await Api.get(req.url, req.param);
    getData = { ...getData, data: resp.data };
  } catch (e) {
    const statusSet = { ...statusData, class: '', status: '400', msg: e.message };
    getData = { ...getData, status: statusSet };
  }
  return getData;
};

export default requestPost;
