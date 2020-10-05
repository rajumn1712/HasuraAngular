import gql from 'graphql-tag';

export const GetQuery = gql`
query PostsGetQuery{
    table_angular{
        id
        text
        is_completed
    }
}
`;

export const AddMutation = gql`
mutation myMutation($objects: [table_angular_insert_input!] = {}) {
  insert_table_angular(objects: $objects) {
    returning {
      description
      id
      title
      user {
        id
        name
      }
    }
  }
}

  
`;

