import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers :{
    Authorization: 'Client-ID enJhNrEycvKLavcLV1X5vHG_UerDgqZtKo0qx_oqo4c'
  }
})