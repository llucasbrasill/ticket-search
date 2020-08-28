import React from 'react'
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const params = useParams();

  return (<>
    <div>
      <h1>Teste</h1>
      <p>id: {params.id}</p>
    </div></>
  );
};

export default SearchPage;