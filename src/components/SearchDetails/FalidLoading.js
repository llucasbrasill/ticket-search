import React from 'react'
import style from "../../assets/css/global.module.css";


const FalidLoading = ({ search }) => {
  return (
    <>
      <ul className={style.loadingElement}>
        <p>Não conseguimos encontrar seu ticket, tente novamente.</p>
        <a href={`/ticket/${search}`}>Tente novamente!</a>
      </ul>
    </>
  )

}

export default FalidLoading;

