import gql from 'graphql-tag';

export const GetQuery = gql`
query PostsGetQuery{
    hasurawithangular{
        id
        text
        is_completed
    }
}
`;

export const AddMutation = gql`
mutation insert_hasurawithangular($objects:[hasurawithangular_insert_input!]!){
    insert_hasurawithangular(objects:$objects){
        returning{
            id
            text
            is_completed
            user
        }
    }
}
`;

