import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation Register {
    register(input: $input) @rest(type: "User", path: "/register", method: "POST") {
      email
      username
      uuid
      accessToken
    }
  }
`;

export default REGISTER;
