/* eslint-disable @typescript-eslint/no-var-requires */
const { getReadingTime } = require("text-analyzer")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "readingTime",
      value: getReadingTime(node.rawMarkdownBody),
    })
  } else if (node.internal.type === "Mdx") {
    createNodeField({
      node,
      name: "readingTime",
      value: getReadingTime(node.rawBody),
    })
  }
}
