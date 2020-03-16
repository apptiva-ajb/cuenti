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
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {cuentis
            ? cuentis.map(cuenti => {
                return (
                  <Link
                    key={cuenti.id}
                    to={`/story/${cuenti.id}`}
                    state={cuenti}
                  >
                    <div className="story_link_box">{cuenti.nombre}</div>
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
