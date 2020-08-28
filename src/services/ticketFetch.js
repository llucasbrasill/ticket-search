import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {

      try {
        setData(json.data.glpi[0]);
      } catch (error) {
        setData(null);
        setError(error);
      }
      setLoading(false);
      return ({ response, json });
    }
  }, []);

  return { data, setData, loading, error, request };
};

export default useFetch;