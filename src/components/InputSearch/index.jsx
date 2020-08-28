import React from 'react'
import style from "./styles.module.css";

const InputSearch = (props) => {
  const { handleSubmit, handleChange, search, } = props;

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.container}>
          <span className={style.hashtag}>#</span>
          <input name="search" search={search} onChange={handleChange} autoComplete="off" value={search ? search : ''} placeholder="Digite seu ticket" type="text" />
          <a href={`/${search}`} className={style.button}>Search</a>
        </div>
      </form>
    </>
  )
}

export default InputSearch;