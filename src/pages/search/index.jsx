import React from 'react'
import ticketFetch from '../../services/ticketFetch';
import style from "../../assets/css/global.module.css";
export default function Home() {

  const { data, loading, error, request } = ticketFetch();
  const [dataGLPI, setDataGLPI] = React.useState('');
  const [search, setSearch] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

  }

  function handleChange({ target }) {
    const { value } = target;
    setSearch(value);
    request(`https://api-truly-dev.predict-systems.com/api/v1/itsm/ticket?id=123210`, {
      headers: new Headers({
        Authorization: 'Bearer predict@10',
      }),
    });

    if (data) {
      const { glpi } = data;
      setDataGLPI(glpi);
      console.log("GLPI" + glpi);
    }

  }



  if (error) return (
    <div className={style.row}>
      <div className={search
        ? style.containerSearchTop
        : style.containerSearch}>
        <h1>Ticket <b>Search</b></h1>

        <form onSubmit={handleSubmit} className={style.form} action="">
          <input className={style.inputSearch} value={search} onChange={handleChange} type="text"></input>

          <span className={style.hashtagSearch}>#</span>
        </form>
        {<div >

          <p>Este Ticket não existe</p>
        </div>
        }

      </div>
    </div >
  );




  if (loading) return (
    <div className={style.row}>
      <div className={search
        ? style.containerSearchTop
        : style.containerSearch}>
        <h1>Ticket <b>Search</b></h1>

        <form onSubmit={handleSubmit} className={style.form}>
          <input className={style.inputSearch} value={search} onChange={handleChange} type="text"></input>

          <span className={style.hashtagSearch}>#</span>
        </form>
        {
          <div className={style.animeLoading}>
            <div className={style.ldsDualRing}></div>
          </div>
        }

      </div>
    </div >
  );
  if (data) return (
    <div className={style.row}>
      <div className={search
        ? style.containerSearchTop
        : style.containerSearch}>
        <h1>Ticket <b>Search</b></h1>

        <form onSubmit={handleSubmit} className={style.form}>
          <input className={style.inputSearch} value={search} onChange={handleChange} type="text"></input>

          <span className={style.hashtagSearch}>#</span>
        </form>
        {
          search && < div >
            <h2 className={style.ticketNumber}><b>Chamdo # {search}</b></h2>
            <ul>
              <li><p> <b>Data de abertura:</b> <span className={style.animeLoadingData}>{dataGLPI['date']}</span></p></li>
              <li><p> <b>Tempo de Solução:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Data de Solução:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Status:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Categoria:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Ticket Pai:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Solicitante:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Grupo Técnico:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li><p> <b>Técnico:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
              <li className={style.ticketTitle}>
                <p>
                  <b>Título: </b>
                  <span>

                  </span>
                </p>
              </li>
              <li className={style.ticketDescription}><p> <b>Descrição:</b>

              </p></li>

            </ul>
          </div>
        }

      </div>
    </div >
  );
  else return (
    <div className={style.row}>
      <div className={search
        ? style.containerSearchTop
        : style.containerSearch}>
        <h1>Ticket <b>Search</b></h1>

        <form onSubmit={handleSubmit} className={style.form}>
          <input className={style.inputSearch} value={search} onChange={handleChange} type="text"></input>

          <span className={style.hashtagSearch}>#</span>
        </form>

        {search && <div className={style.animeLoading}>
          <div className={style.ldsDualRing}></div>
        </div>}


      </div>
    </div >
  );
}
