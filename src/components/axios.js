import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-febbe.cloudfunctions.net/api',
});

export default instance;

// Local URL
///////////
//
//   'http://localhost:5001/clone-febbe/us-central1/api'
