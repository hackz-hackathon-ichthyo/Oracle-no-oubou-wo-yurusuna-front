/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDethamaTVChatMessage = /* GraphQL */ `
  subscription OnCreateDethamaTVChatMessage(
    $id: ID
    $message: String
    $user_name: String
  ) {
    onCreateDethamaTVChatMessage(
      id: $id
      message: $message
      user_name: $user_name
    ) {
      id
      message
      user_name
      create_at
      channel_id
    }
  }
`;
