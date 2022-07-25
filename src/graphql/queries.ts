/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDethamaTVChatMessage = /* GraphQL */ `
  query GetDethamaTVChatMessage($id: ID!) {
    getDethamaTVChatMessage(id: $id) {
      id
      message
      user_name
      create_at
      channel_id
    }
  }
`;
export const listDethamaTVChatMessages = /* GraphQL */ `
  query ListDethamaTVChatMessages(
    $filter: TableDethamaTVChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDethamaTVChatMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        user_name
        create_at
        channel_id
      }
      nextToken
    }
  }
`;
