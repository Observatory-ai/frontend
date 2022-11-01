module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'admin', // switch to .env var
        },
      },
    },
  ],
  documents: ['src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
