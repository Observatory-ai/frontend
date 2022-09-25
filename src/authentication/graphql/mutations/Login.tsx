import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation Login {
    login(input: $input) @rest(type: "User", path: "/login", method: "POST") {
      email
      username
      uuid
      accessToken
    }
  }
`;

export default LOGIN;
