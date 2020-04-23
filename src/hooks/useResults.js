import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchAPI();
  }, []);

  const searchAPI = async (term = '') => {
    console.log('will search');
    try {
      const res = await yelp.get(`/search?limit=50&location=NYC&term=${term}`);

      setResults(res.data.businesses);
      setError('');
    } catch (error) {
      setError(`Error happened while trying to connect : ${error}`);
    }
  };

  return [searchAPI, error, results];
};
