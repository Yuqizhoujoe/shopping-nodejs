const { buildSchema } = require("graphql");

// ! -> required
module.exports = buildSchema(`
    type TestData {
        text: String!,
        views: Int!
    }

    type RootQuery {
        hello: TestData!
    }

    schema {
        query: RootQuery
    }
`);
