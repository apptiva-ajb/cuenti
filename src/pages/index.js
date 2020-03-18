import React, { Component } from "react"
import { Link } from "gatsby"

import Amplify, { API, graphqlOperation } from "aws-amplify"
import awsmobile from "../aws-exports"
import { listObras } from "../graphql/queries"

import Layout from "../components/layout"
import SEO from "../components/seo"

Amplify.configure(awsmobile)

class IndexPage extends Component {
  state = {
    cuentis: [],
  }

  componentDidMount() {
    this.getCuentis()
  }

  getCuentis = async () => {
    const result = await API.graphql(graphqlOperation(listObras))
    this.setState({ cuentis: result.data.listObras.items })
  }

  render() {
    const { cuentis } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            display: "flex",
          }}
        >
          {cuentis
            ? cuentis.map(cuenti => {
                console.log(cuenti)
                return (
                  <Link
                    key={cuenti.id}
                    to={`/story/${cuenti.id}`}
                    state={cuenti}
                    style={{ marginRight: "1rem" }}
                  >
                    {cuenti.imagen ? (
                      <div className="story_link_img"><img src={cuenti.imagen} />
                      <span className="nombre_overflow">{cuenti.nombre}</span></div>
                    ) : (
                      <div
                        className="story_link_box"
                        style={{
                          backgroundImage: `url(${cuenti.imagen}) no-repeat center center`,
                          backgroundSize: `cover`,
                        }}
                      >
                        {cuenti.nombre}
                      </div>
                    )}
                  </Link>
                )
              })
            : ""}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
