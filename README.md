# gatsby-remark-text-composition

Adds text composition fields to all remark nodes in your Gatsby project. Supports both MD and MDX!

## Installation

Install the plugin with `npm` or `yarn`.

```bash
# npm
npm install gatsby-remark-text-composition

# yarn
yarn add gatsby-remark-text-composition
```

### Markdown (MD)

To use the plugin with regular markdown files, add it to the `gatsby-transformer-remark` plugins array in `gatsby-config.js`.

```js
// gatsby-config.js
  ...
  plugins: [
    ...
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-text-composition",
          // ...
        ],
      },
    },
  ]
```

### MDX

To use the plugin with MDX, add it as a regular plugin in `gatsby-config.js`.

```js
// gatsby-config.js
  ...
  plugins: [
    ...
    'gatsby-remark-text-composition',
  ],
```

## Usage

The `gatsby-remark-text-composition` data is queried in different ways depending on if you're using markdown or MDX.

### Markdown (MD)

If you are transforming markdown with `gatsby-transformer-remark`, you can query the text composition data like this:

```js
const result = await graphql(`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          readingTime {
            milliseconds
            minutes
            words
          }
        }
      }
    }
  }
`);
```

### MDX

If you are using MDX with `gatsby-plugin-mdx`, you can query the text composition data like this:

```js
export const query = graphql`
  query {
    allMdx {
      nodes {
        fields {
          readingTime {
            milliseconds
            minutes
            words
          }
        }
      }
    }
  }
`;
```

## Data

The fields available in `gatsby-remark-text-composition` are explained below.

#### Reading time

- `minutes`: Estimated reading time in minutes (number).
- `milliseconds`: Estimated reading time in milliseconds (number).
- `words`: Calculated amount of words, which is used when estimating reading time (number).

## License

MIT
