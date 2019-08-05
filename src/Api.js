import axios from 'axios';

const API = axios.create({
  baseURL: 'https://simple-note-back.herokuapp.com/api',
  headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
  }
});

export default API;
