# Observatory Web Client

## Corequisites

Refer to the backend repository, as the backend code must be run alongside the frontend. You can find that information [here](https://github.com/Observatory-ai/backend).

## Installation

```bash
$ yarn
```

## Create environment file

```
PORT=4000
REACT_APP_GOOGLE_AUTH_CLIENT_ID=
REACT_APP_HASURA=http://localhost:3000/graphql
```

## Run the web client

```bash
# development
$ yarn generate
$ yarn run start
```
