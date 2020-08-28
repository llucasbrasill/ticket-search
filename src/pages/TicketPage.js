import React from 'react'

import fetchSearch from '../services/ticketFetch';

import { useParams, useNavigate } from 'react-router-dom';
import tokenSearch from "../services/tokenSearch";

// Layout
import Main from "../layout/main";
// Compoenents  
import TitleSearch from "../components/TitleSearch";
import InputSearch from "../components/InputSearch";
import FalidLoading from '../components/SearchDetails/FalidLoading';
import LoadingDetails from '../components/SearchDetails/loadingSearch';

const SearchDetails = React.lazy(() => import('../components/SearchDetails/SearchDetails'));



const TicketPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, loading, error, request } = fetchSearch();
  const [ticketLoading, setTicketLoading] = React.useState(false);
  const [search, setSearch] = React.useState(null);
  const [typing, setTyping] = React.useState(false)



  function handleChange({ target }) {
    let { value } = target;
    setSearch(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTicketLoading(false);
    getData();
    (search && navigate(`/ticket/${search}`)) || (navigate("/"));

  }


  async function getData() {
    if (ticketLoading === false && !data) {
      setTicketLoading(true);
      if (!loading && !data) {
        let id;
        (params.id) && (id = params.id);
        (params.id) && (setSearch(id));
        (search) && (id = search);
        if (id && !data) {
          request(`https://api-truly-dev.predict-systems.com/api/v1/itsm/ticket?id=${id}`, {
            headers: new Headers({
              Authorization: tokenSearch,
            }),
          });
        }
        (data) && (setTicketLoading(false));
      }
    }
  }

  React.useEffect(() => {
    getData();
  }, [handleSubmit]);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setTyping(false)
    }, 200)
    setTyping(true);
    search && navigate(`/ticket/${search}`);
    return () => (clearTimeout(delayDebounceFn));
  }, [search])




  const FalidLoadingCheck = params.id && !loading && !error && !data && !typing;
  const DataLoadingCheck = data && !loading;
  const DataSuspene = (<React.Suspense fallback={<div>Carregando...</div>}>
    <SearchDetails data={data} search={search} />
  </React.Suspense>);





  return (

    <>
      <Main search={search}>
        <TitleSearch />
        <InputSearch search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

        {typing && <LoadingDetails />}

        {FalidLoadingCheck && (search === params.id) && < FalidLoading search={search} />}

        {DataLoadingCheck && search && !typing && DataSuspene}


        {(loading && <LoadingDetails />) || ((error && !data && "Error ao conectar com a API") || (!data && !loading))}


      </Main >
    </>

  );

};

export default TicketPage;