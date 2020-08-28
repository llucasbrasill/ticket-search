import React from 'react'
import fetchSearch from '../../services/ticketFetch';
import { useParams } from "react-router-dom";


// Layout
import Main from "../../layout/main";


// Compoenents  
import TitleSearch from "../../components/TitleSearch";
import InputSearch from "../../components/InputSearch";
import SearchDetails from '../../components/SearchDetails/SearchDetails';


const Search = () => {

  let { ticketID } = useParams();


  const [ticket, setTicket] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [sear, setSear] = React.useState(false);



  const { data, loading, error, request } = fetchSearch();

  function handleChange({ target }) {
    let { value } = target;
    setSearch(value);
    console.log('pesquisando...');

  }

  function handleSubmit(event) {
    event.preventDefault();
    setSear(true);

  }

  React.useEffect(() => {

    if (!ticket) {
      request(`https://api-truly-dev.predict-systems.com/api/v1/itsm/ticket?id=123210`, {
        headers: new Headers({
          Authorization: 'Bearer predict@10',
        }),
      });
      setTicket(data);
    }

  }, [sear, data, request, ticket]);




  if (error) return (
    <>
      <Main search={search}>
        <TitleSearch />
        <InputSearch search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
        <p>{ticketID}</p>
      </Main>
    </>
  );


  if (loading) return (
    <>
      <Main search={search}>
        <TitleSearch />
        <InputSearch search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

        <p>Careggando...</p>
      </Main>
    </>
  );
  if (data) return (
    <>
      <Main search={search}>
        <TitleSearch />
        <InputSearch search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

        <SearchDetails data={data} />
      </Main>
    </>
  );
  else return (
    <>
      <Main search={search}>
        <TitleSearch />
        <InputSearch search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      </Main>
    </>
  );



}

export default Search;
