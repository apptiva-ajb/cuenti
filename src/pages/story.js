import React from "react"
import Layout from "../components/layout"
import "./story.css"

const Story = ({ location }) => {
  const { state = {} } = location
  const { nombre, fecha, id } = state
  return (
    <Layout>
      <section>
        <section>
          <div>Título: {nombre ? nombre : ""}</div>
          <div className="flex_row">
            <div className="story_div_img">
              <img className="story_img" src="https://estaticos.elperiodico.com/resources/jpg/2/9/baby-yoda-estrella-the-the-mandalorian-que-conquistado-las-redes-1576220722292.jpg" />
            </div>
            <div className="flex_column">
                <span>Autor:</span>
                <span>Géneros:</span>
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
