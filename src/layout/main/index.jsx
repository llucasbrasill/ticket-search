import React from 'react'
import style from "./style.module.css";

export const container = ({ children, search, ...props }) => {
  return (
    <>
      <main className={search ? style.top : style.center} {...props}>
        {children}
      </main>
    </>
  )
}
export default container;
