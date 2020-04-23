import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer aKXuf37OU_0ISiZ0zYDgayMqI56lljptFNPZXpPFInuCq3gZzxmHyHkOqaVFCFD-AFpKbHrFrxFkfvWFrCWBE2n-B3H0_2v55C94CbxdBh78Mp3M_rQzPVK-dZyfXnYx',
  },
});
