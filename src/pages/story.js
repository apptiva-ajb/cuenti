import React from "react"
import Layout from "../components/layout"
import "./story.css"

const Story = ({ location }) => {
  const { state = {} } = location
  const { nombre, fecha, id, imagen, autor, generos, capitulos, personajes } = state
  return (
    <Layout>
      <section>
        <section>
          <div>Título: {nombre ? nombre : ""}</div>
          <div className="flex_row">
            <div className="story_div_img">
              <img className="story_img" src={imagen ? imagen : ""} />
            </div>
            <div className="flex_column">
              <span>Autor:{autor ? autor : ""}</span>
              <span>
                Géneros:{" "}
                {generos
                  ? generos.map(genero => (
                      <span className="genero">{genero}</span>
                    ))
                  : ""}
              </span>
              <span>Año: {fecha ? fecha : ""}</span>
              <span>Capítulos:</span>
              <span>Tiempo lectura:</span>
              <span>Estrellas:</span>
              <span>Idiomas:</span>
            </div>
          </div>
        </section>
        <section>Valoraciones</section>
        <section>Descripción</section>
      </section>
    </Layout>
  )
}

export default Story
