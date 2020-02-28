import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.css"
const Footer = () => (
    <div className="footer">
        <div>📚</div>
        <div>🔍</div>
        <div className="spacer"></div>
        <div>👤</div>
    </div>
)

export default Footer

