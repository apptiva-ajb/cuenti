const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/story/)) {
    createPage({
      path: "/story",
      matchPath: "/story/*",
      component: path.resolve(`src/pages/story.js`),
    })
  }
}
