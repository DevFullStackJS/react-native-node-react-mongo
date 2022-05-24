import env from 'react-native-config';

let url = 'http://localhost:4000/';

const {REACT_APP_API_URL} = env;
url = REACT_APP_API_URL;

export default {
  url,
  baseURL: 'http://localhost:4000/',
  apiDocs: `${url}api-docs/`,
  pathApi: 'api/',
  myprivatekey: 'myprivatekey',
  merchantId: 'merchant.selenelotusprod.ch',
  clientSecret: '',
  clientSecret_prod: '',
};
