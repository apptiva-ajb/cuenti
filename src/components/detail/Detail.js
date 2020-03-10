import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Detail = ({ data }) => {
  return (
    <section>
      <section>
        {/* <div>Título: {data}</div> */}
        <div>
          <div>Imágeness</div>
          <div>Textos</div>
        </div>
      </section>
      <section>Valoraciones</section>
      <section>Descripción</section>
    </section>
  )
}

export default Detail
