import React from 'react'
import parser from 'html-react-parser';
import style from "../../assets/css/global.module.css";

const SearchDetails = ({ data, search }) => {

  return (
    data && <div>

      <ul>
        < h2 className={style.ticketNumber} > <b>Chamdo # {data.id}</b></h2>
        <li><p> <b>Data de abertura:</b> <span>{data.date_creation}</span></p></li>
        <li><p> <b>Tempo de Solução:</b> <span>{data.date}</span></p></li>
        <li><p> <b>Data de Solução:</b> <span>{data.solvedate && data.solvedate}</span></p></li>
        <li><p> <b>Status:</b><span >{data.status && data.status.name}</span></p></li>
        <li><p> <b>Categoria:</b> <span >{data.itilcategories_id && data.itilcategories_id}</span></p></li>
        <li><p> <b>Ticket Pai:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
        <li><p> <b>Solicitante:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
        <li><p> <b>Grupo Técnico:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
        <li><p> <b>Técnico:</b> <span className={style.animeLoadingData}>26/05/2020</span></p></li>
        <li className={style.ticketTitle}>
          <p> <b>Título: </b><span>{data.name}</span></p>
        </li>
        <li className={style.ticketDescription}>
          <p><b>Descrição:</b>
            <span dangerouslySetInnerHTML={{ __html: parser(data.content) }} ></span></p>
        </li>
      </ul>
    </div >
  )
}

export default SearchDetails;